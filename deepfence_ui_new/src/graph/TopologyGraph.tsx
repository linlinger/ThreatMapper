import { ICombo } from '@antv/g6-core';
import { useEffect, useRef, useState } from 'react';

import v1 from '../topology/data/v1.json';
import v2 from '../topology/data/v2.json';
import v3 from '../topology/data/v3.json';
import v4 from '../topology/data/v4.json';
import topologyData from '../topology/topology-data-v1.json';
import topologyDataAzureCollapse from '../topology/topology-data-v1-azure-collapse.json';
import topologyDataAzureExpanded from '../topology/topology-data-v1-azure-expanded.json';
import { collapseNode, expandNode, itemIsExpanded } from './graphManager/expand-collapse';
import { useToplogy } from './topology/useToplogy';
import {
  fixCombo,
  getParents,
  modelNodeTypeToTopologyChildrenTypes,
  modelParentsToTopologyParents,
  onHoverNode,
  onNodeMouseEnter,
  onNodeMouseLeave,
  TopologyNodeType,
  uiToServerNodeMap,
  uiToServerNodeParents,
} from './topology/utils';
import { ICustomNode, IEvent, IItem } from './types';
import { useG6raph } from './useG6raph';
import { debounce, nodeToFront } from './utils';

export const TopologyGraph = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const { graph } = useG6raph(container, {});

  // focus current click node at center
  const pullNodeAtCenter = () => {
    if (trackedItem.current) {
      nodeToFront(trackedItem.current);
      graph?.focusItem(trackedItem.current, true);
    }
  };

  const { update } = useToplogy(graph, {
    tick: debounce(pullNodeAtCenter, 500),
  });

  const countRef = useRef(1);

  countRef.current = 1;

  // current process node
  const trackedItem = useRef<ICustomNode | null>(null);

  const setTrackedItem = (item: ICustomNode | null) => {
    trackedItem.current = item;
  };

  useEffect(() => {
    if (!graph) {
      return;
    }

    update(v1);

    function callExpandApi(item: IItem) {
      if (graph === null || item === null) {
        return;
      }
      const node = item.get?.('model');

      const topo_node_type = uiToServerNodeMap(node.node_type);
      if (!topo_node_type) {
        console.error("node can't be expanded", node);
        return;
      }

      const parents = getParents(graph, graph.findById(node.id)).map((id: string) =>
        graph.findById(id).get('model'),
      );

      const nodeTypeIdMapForParent = uiToServerNodeParents(parents);

      const kubernetes =
        nodeTypeIdMapForParent[TopologyNodeType.KUBERNETES_CLUSTER] !== undefined;

      const topo_children_types = modelNodeTypeToTopologyChildrenTypes(node.node_type, {
        kubernetes,
      });
      if (topo_children_types === undefined) {
        console.log('node can not be expanded', node);
        return;
      }
    }

    // all graph listeners are defined here
    graph.on('node:click', (e: IEvent) => {
      const { item: node } = e;
      countRef.current = countRef.current + 1;

      if (itemIsExpanded(node!)) {
        collapseNode(
          graph,
          node! as ICustomNode,
          (_item: IItem) => {
            const node = _item.get('model');

            const item = graph.findById(node.id);

            const parents = getParents(graph, item).map<ICustomNode>((id) =>
              graph.findById(id).get<ICustomNode>('model'),
            );
            const mapParents = modelParentsToTopologyParents(parents);

            // call api
            update(topologyDataAzureCollapse);
          },
          false,
        );
        graph.emit('df-track-item', { item: node });
        pullNodeAtCenter();
      } else {
        expandNode(node!);
        // callExpandApi

        let data = {};
        if (countRef.current === 0) {
          data = v1;
        } else if (countRef.current === 2) {
          data = v2;
        } else if (countRef.current === 3) {
          data = v3;
        } else if (countRef.current === 4) {
          data = v4;
        }
        update(data);
      }
    });
    // graph listeners
    graph.on('df-track-item', (e: IEvent) => {
      setTrackedItem(e.item as ICustomNode);
    });

    graph.on('node:mouseenter', (e: IEvent) => {
      onHoverNode(e.item as ICustomNode, true);
    });
    graph.on('node:mouseleave', (e: IEvent) => {
      onHoverNode(e.item as ICustomNode, false);
    });

    graph.on('node:drag', (e: IEvent) => {
      e.preventDefault();
    });

    graph.on('combo:drag', (e: IEvent) => {
      e.preventDefault();
    });

    graph.on('combo:dragend', (e: IEvent) => {
      try {
        const combo = e.item as ICombo;
        // TODO: not sure this actually does its task, enable commented code below when problem is seen
        fixCombo(graph, combo);
      } catch (e) {
        console.error('exception handling dragend', e);
      }
    });

    graph.on('combo:click', (e: IEvent) => {
      graph?.focusItem(e.item!, true);
    });

    graph.on('dragstart', () => {
      setTrackedItem(null);
    });

    graph.on('df-track-item', (e) => {
      setTrackedItem(e.item as ICustomNode);
    });

    graph.on('beforeremoveitem', (e: IEvent) => {
      const item = e.item as ICustomNode;
      if (trackedItem.current?.get('model')?.id === item.id) {
        setTrackedItem(null);
      }
    });
    graph.on('node:mouseenter', onNodeMouseEnter(graph));
    graph.on('node:mouseleave', onNodeMouseLeave(graph));
  }, [graph]);

  return <div className="h-full w-full bg-black" ref={setContainer}></div>;
};
