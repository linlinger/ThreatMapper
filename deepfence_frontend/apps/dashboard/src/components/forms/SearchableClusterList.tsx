import { useInfiniteQuery } from '@tanstack/react-query';
import { debounce } from 'lodash-es';
import { useEffect, useMemo, useState } from 'react';
import { CircleSpinner, Combobox, ComboboxOption } from 'ui-components';

import { queries } from '@/queries';

const PAGE_SIZE = 15;
export const SearchableClusterList = ({
  onChange,
  onClearAll,
  defaultSelectedClusters,
  valueKey = 'nodeId',
  active,
  triggerVariant,
  helperText,
  color,
}: {
  onChange?: (value: string[]) => void;
  onClearAll?: () => void;
  defaultSelectedClusters?: string[];
  valueKey?: 'nodeId' | 'nodeName';
  active?: boolean;
  triggerVariant?: 'select' | 'button';
  helperText?: string;
  color?: 'error' | 'default';
}) => {
  const [searchText, setSearchText] = useState('');

  const [selectedClusters, setSelectedClusters] = useState<string[]>(
    defaultSelectedClusters ?? [],
  );

  const isSelectVariantType = useMemo(() => {
    return triggerVariant === 'select';
  }, [triggerVariant]);

  useEffect(() => {
    setSelectedClusters(defaultSelectedClusters ?? []);
  }, [defaultSelectedClusters]);

  // TODO convert to useSuspenseInfiniteQuery, otherwise there will be problems with
  // error handling
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
    ...queries.search.clusters({
      size: PAGE_SIZE,
      searchText,
      active,
      agentRunning: true,
    }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length * PAGE_SIZE;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      if (!allPages.length) return 0;
      return (allPages.length - 1) * PAGE_SIZE;
    },
  });

  const searchCluster = debounce((query) => {
    setSearchText(query);
  }, 1000);

  const onEndReached = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <>
      <input
        type="text"
        name="selectedClusterLength"
        hidden
        readOnly
        value={selectedClusters.length}
      />
      <Combobox
        startIcon={
          isFetching ? <CircleSpinner size="sm" className="w-3 h-3" /> : undefined
        }
        name="clusterFilter"
        triggerVariant={triggerVariant || 'button'}
        label={isSelectVariantType ? 'Cluster' : undefined}
        getDisplayValue={() =>
          isSelectVariantType && selectedClusters.length > 0
            ? `${selectedClusters.length} selected`
            : null
        }
        placeholder="Select cluster"
        multiple
        value={selectedClusters}
        onChange={(values) => {
          setSelectedClusters(values);
          onChange?.(values);
        }}
        onQueryChange={searchCluster}
        clearAllElement="Clear"
        onClearAll={onClearAll}
        onEndReached={onEndReached}
        helperText={helperText}
        color={color}
      >
        {data?.pages
          .flatMap((page) => {
            return page.clusters;
          })
          .map((cluster, index) => {
            return (
              <ComboboxOption
                key={`${cluster.nodeId}-${index}`}
                value={cluster[valueKey]}
              >
                {cluster.nodeName}
              </ComboboxOption>
            );
          })}
      </Combobox>
    </>
  );
};
