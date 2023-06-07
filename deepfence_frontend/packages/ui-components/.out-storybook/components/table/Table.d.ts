import React from 'react';
import { Cell, ColumnDef, ColumnHelper, createColumnHelper, DisplayColumnDef, ExpandedState, OnChangeFn, PaginationState, Row, RowData, RowSelectionOptions, RowSelectionState, SortingState, Table, TableOptions } from '@tanstack/react-table';
import { ReactElement, Ref } from 'react';
type SizeOf = 'compact' | 'medium' | 'default' | 'relaxed';
export interface TableProps<TData extends RowData> {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    renderSubComponent?: (props: {
        row: Row<TData>;
    }) => React.ReactElement;
    getRowCanExpand?: (row: Row<TData>) => boolean;
    enableColumnResizing?: boolean;
    enablePagination?: boolean;
    enablePageResize?: boolean;
    onPageResize?: (pageSize: number) => void;
    manualPagination?: boolean;
    pageIndex?: number;
    pageSize?: number;
    totalRows?: number;
    onPaginationChange?: OnChangeFn<PaginationState>;
    enableSorting?: boolean;
    manualSorting?: boolean;
    sortingState?: SortingState;
    onSortingChange?: OnChangeFn<SortingState>;
    enableRowSelection?: RowSelectionOptions<TData>['enableRowSelection'];
    enableSubRowSelection?: RowSelectionOptions<TData>['enableSubRowSelection'];
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    rowSelectionState?: RowSelectionState;
    getRowId?: TableOptions<TData>['getRowId'];
    size?: SizeOf;
    expanded?: ExpandedState;
    onExpandedChange?: OnChangeFn<ExpandedState>;
    getTdProps?: (cell: Cell<TData, unknown>) => React.ComponentProps<'td'>;
    getTrProps?: (row: Row<TData>, rowIdx: number) => React.ComponentProps<'tr'>;
    getSubRows?: (originalRow: TData, index: number) => TData[] | undefined;
    noDataText?: string;
    approximatePagination?: boolean;
}
export declare function getRowExpanderColumn<TData extends RowData>(columnHelper?: ColumnHelper<TData>, options?: Omit<DisplayColumnDef<TData, unknown>, 'id' | 'enableResizing'>): ColumnDef<TData, unknown>;
export declare function getRowSelectionColumn<TData extends RowData>(columnHelper?: ColumnHelper<TData>, options?: Omit<DisplayColumnDef<TData, unknown>, 'id' | 'enableResizing'>): ColumnDef<TData, unknown>;
declare const CustomTableWithRef: <TData extends unknown>(props: TableProps<TData> & {
    ref?: React.Ref<Table<TData>> | undefined;
}) => ReactElement;
export { createColumnHelper, CustomTableWithRef as Table };
export type { ExpandedState, PaginationState, RowSelectionState, SortingState, Table as TableInstance, };
