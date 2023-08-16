import { fromJS, Map } from 'immutable';
import React from 'react';
import { scanRegistryImagesAction, toaster } from '../actions/app-actions';
import { nodeListWithType } from '../components/multi-cloud-table/utils';
import { NodeActionModal } from './node-action-modal';

const actionOptionsIndex = fromJS({
  start_vulnerability_scan: {
    label: '开始漏洞扫描',
    onClick: (param, triggerModal) => triggerCVEScanModal(param, triggerModal),
    enabled: false,
  },
  stop_vulnerability_scan: {
    label: '停止漏洞扫描',
    onClick: (param, triggerModal, dispatch) =>
      triggerStopCVEScanModal(param, triggerModal, dispatch),
    enabled: false,
  },
  start_secrets_scan: {
    label: '开始密码密钥扫描',
    onClick: (param, triggerModal, dispatch) =>
      triggerStartSecretsScanModal(param, triggerModal, dispatch),
    enabled: false,
  },
  stop_secrets_scan: {
    label: '停止密码密钥扫描',
    onClick: (param, triggerModal, dispatch) =>
      triggerStopSecretScanModal(param, triggerModal, dispatch),
    enabled: false,
  },
  start_malware_scan: {
    label: '开始恶意软件扫描',
    onClick: (param, triggerModal, dispatch) =>
      triggerStartMalwareScanModal(param, triggerModal, dispatch),
    enabled: false,
  },
  stop_malware_scan: {
    label: '停止恶意软件扫描',
    onClick: (param, triggerModal, dispatch) =>
      triggerStopMalwareScanModal(param, triggerModal, dispatch),
    enabled: false,
  },
});

const actionOptionsByType = {
  host: ['start_vulnerability_scan', 'stop_vulnerability_scan', 'start_secrets_scan', 'start_malware_scan', 'stop_secrets_scan', 'stop_malware_scan'],
  container: ['start_vulnerability_scan', 'stop_vulnerability_scan', 'start_secrets_scan', 'start_malware_scan', 'stop_secrets_scan', 'stop_malware_scan'],
  container_image: ['start_vulnerability_scan', 'stop_vulnerability_scan', 'start_secrets_scan', 'start_malware_scan', 'stop_secrets_scan', 'stop_malware_scan'],
};

const getIntersection = (array1, array2) =>
  array1.filter(value => array2.includes(value)) || [];

export const actionDropdownOptions = node_types => {
  if (node_types.length === 0) {
    return Object.values(actionOptionsIndex.toJS());
  }
  let actionOptionsIndex_copy = actionOptionsIndex;
  // get intersection of all node types
  const base = node_types[0];
  let intersection = actionOptionsByType[base] || [];
  node_types.map(node_type => {
    intersection = getIntersection(
      intersection,
      actionOptionsByType[node_type] || []
    );
    return intersection;
  });

  // eslint-disable-next-line no-unused-vars
  for (const actionName of intersection) {
    actionOptionsIndex_copy = actionOptionsIndex_copy.set(actionName, {
      ...actionOptionsIndex_copy.get(actionName).toJS(),
      enabled: true,
    });
  }
  return Object.values(actionOptionsIndex_copy.toJS());
};

const renderModalContent = props => {
  const { selectedDocIndex = {}, isCVE = false } = props;

  const resetSelection = false;
  return (
    <NodeActionModal
      selectedDocIndex={selectedDocIndex} // ['cos-vm:<host>',]
      resetSelection={resetSelection}
      isCVE={isCVE}
    />
  );
};

export const triggerCVEScanModal = (selectedDocIndex, triggerModal) => {
  const isCVE = true;
  const modalProps = {
    title: '漏洞扫描',
    modalContent: renderModalContent,
    modalContentProps: {
      selectedDocIndex,
      isCVE,
    },
    contentStyles: {
      width: '400px',
    },
  };
  return triggerModal('GENERIC_MODAL', modalProps);
};

const triggerStopCVEScanModal = (selectedDocIndex, triggerModal, dispatch) => {
  const modalProps = {
    dialogTitle: '停止漏洞扫描',
    dialogBody:
      '这只会停止处于队列中的扫描。它不会停止当前正在运行的扫描。是否要继续？',
    confirmButtonText: '是',
    cancelButtonText: '否',
    onConfirmButtonClick: paramsIm =>
      bulkStopCVEScan(selectedDocIndex, paramsIm, dispatch),
  };
  return triggerModal('DIALOG_MODAL', modalProps);
};


const triggerStopSecretScanModal = (selectedDocIndex, triggerModal, dispatch) => {
  const modalProps = {
    dialogTitle: '停止密码密钥扫描',
    dialogBody:
      '这只会停止处于队列中的扫描。它不会停止当前正在运行的扫描。是否要继续？',
    confirmButtonText: '是',
    cancelButtonText: '否',
    onConfirmButtonClick: paramsIm =>
      bulkStopSecretScan(selectedDocIndex, paramsIm, dispatch),
  };
  return triggerModal('DIALOG_MODAL', modalProps);
};

const triggerStopMalwareScanModal = (selectedDocIndex, triggerModal, dispatch) => {
  const modalProps = {
    dialogTitle: '停止恶意软件扫描',
    dialogBody:
      '这只会停止处于队列中的扫描。它不会停止当前正在运行的扫描。是否要继续？',
    confirmButtonText: '是',
    cancelButtonText: '否',
    onConfirmButtonClick: paramsIm =>
      bulkStopMalwareScan(selectedDocIndex, paramsIm, dispatch),
  };
  return triggerModal('DIALOG_MODAL', modalProps);
};

const triggerStartSecretsScanModal = (selectedDocIndex, triggerModal, dispatch) => {
  const modalProps = {
    dialogTitle: '开始密码密钥扫描',
    dialogBody:
      '是否在所有选择的节点上开始密码密钥扫描？',
    confirmButtonText: '开始扫描',
    cancelButtonText: '取消',
    onConfirmButtonClick: () =>
      bulkStartSecretsScan(selectedDocIndex, dispatch),
  };
  return triggerModal('DIALOG_MODAL', modalProps);
};

const triggerStartMalwareScanModal = (selectedDocIndex, triggerModal, dispatch) => {
  const modalProps = {
    dialogTitle: '开始恶意软件扫描',
    dialogBody:
      '是否在所有选择的节点上开始恶意软件扫描？',
    confirmButtonText: '开始扫描',
    cancelButtonText: '取消',
    onConfirmButtonClick: () =>
      bulkStartMalwareScan(selectedDocIndex, dispatch),
  };
  return triggerModal('DIALOG_MODAL', modalProps);
};

const bulkStartSecretsScan = async (selectedDocIndex, dispatch) => {
  const nodeListObject = nodeListWithType(selectedDocIndex);
  let successCount = 0;
  let errorCount = 0;
  // eslint-disable-next-line no-unused-vars
  for (const [node_type, node_id_list] of Object.entries(nodeListObject)) {
    const apiParams = {
      action: 'secret_scan_start',
      node_type,
      node_id_list,
    };
    try{
      // eslint-disable-next-line no-await-in-loop
      const response = await dispatch(scanRegistryImagesAction(apiParams));
      const { success } = response;
      if (success) {
        successCount += node_id_list.length;
      } else {
        errorCount += node_id_list.length;
      }
    } catch (e) {
      errorCount += node_id_list.length;
    }
  }
  dispatch(toaster(`成功在 ${successCount} 个节点上开始密码密钥扫描${errorCount ? ` , 在 ${errorCount} 个节点上未能开始扫描。` : '.'}`));
}


const bulkStartMalwareScan = async (selectedDocIndex, dispatch) => {
  const nodeListObject = nodeListWithType(selectedDocIndex);
  let successCount = 0;
  let errorCount = 0;
  // eslint-disable-next-line no-unused-vars
  for (const [node_type, node_id_list] of Object.entries(nodeListObject)) {
    const apiParams = {
      action: 'malware_scan_start',
      node_type,
      node_id_list,
    };
    try{
      // eslint-disable-next-line no-await-in-loop
      const response = await dispatch(scanRegistryImagesAction(apiParams));
      const { success } = response;
      if (success) {
        successCount += node_id_list.length;
      } else {
        errorCount += node_id_list.length;
      }
    } catch (e) {
      errorCount += node_id_list.length;
    }
  }
  dispatch(toaster(`成功在${successCount}个节点上开始恶意软件扫描${errorCount ? ` ,在${errorCount}个节点上未能成功开始扫描` : '.'}`));
}

const bulkStopCVEScan = async (selectedDocIndex = [], paramsIm = Map(), dispatch) => {
  const params = paramsIm.toJS();
  const nodeListObject = nodeListWithType(selectedDocIndex);
  let successCount = 0;
  let errorCount = 0;
  // eslint-disable-next-line no-unused-vars
  for (const [node_type, node_id_list] of Object.entries(nodeListObject)) {
    const apiParams = {
      action: 'cve_scan_stop',
      node_type,
      node_id_list,
      action_args: {
        ...params,
      },
    };
    try{
      // eslint-disable-next-line no-await-in-loop
      const response = await dispatch(scanRegistryImagesAction(apiParams));
      const { success } = response;
      if (success) {
        successCount += node_id_list.length;
      } else {
        errorCount += node_id_list.length;
      }
    } catch (e) {
      errorCount += node_id_list.length;
    }
  }
  dispatch(toaster(`成功在${successCount}个节点开始漏洞扫描${errorCount ? ` , 在${errorCount}个节点上未能开始扫描。` : '.'}`));
};


const bulkStopSecretScan = async (selectedDocIndex = [], paramsIm = Map(), dispatch) => {
  const params = paramsIm.toJS();
  const nodeListObject = nodeListWithType(selectedDocIndex);
  let successCount = 0;
  let errorCount = 0;
  // eslint-disable-next-line no-unused-vars
  for (const [node_type, node_id_list] of Object.entries(nodeListObject)) {
    const apiParams = {
      action: 'secret_scan_stop',
      node_type,
      node_id_list,
      action_args: {
        ...params,
      },
    };
    try{
      // eslint-disable-next-line no-await-in-loop
      const response = await dispatch(scanRegistryImagesAction(apiParams));
      const { success } = response;
      if (success) {
        successCount += node_id_list.length;
      } else {
        errorCount += node_id_list.length;
      }
    } catch (e) {
      errorCount += node_id_list.length;
    }
  }
  dispatch(toaster(`成功在 ${successCount}个节点上停止密码密钥扫描${errorCount ? ` , 未能在${errorCount}个节点上开始扫描` : '.'}`));
};



const bulkStopMalwareScan = async (selectedDocIndex = [], paramsIm = Map(), dispatch) => {
  const params = paramsIm.toJS();
  const nodeListObject = nodeListWithType(selectedDocIndex);
  let successCount = 0;
  let errorCount = 0;
  // eslint-disable-next-line no-unused-vars
  for (const [node_type, node_id_list] of Object.entries(nodeListObject)) {
    const apiParams = {
      action: 'malware_scan_stop',
      node_type,
      node_id_list,
      action_args: {
        ...params,
      },
    };
    try{
      // eslint-disable-next-line no-await-in-loop
      const response = await dispatch(scanRegistryImagesAction(apiParams));
      const { success } = response;
      if (success) {
        successCount += node_id_list.length;
      } else {
        errorCount += node_id_list.length;
      }
    } catch (e) {
      errorCount += node_id_list.length;
    }
  }
  dispatch(toaster(`成功在${successCount}个节点上停止恶意软件扫描${errorCount ? ` , 未能在${errorCount}个节点上开始扫描` : '.'}`));
};
