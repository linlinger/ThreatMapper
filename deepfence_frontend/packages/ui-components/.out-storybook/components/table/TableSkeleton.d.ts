import React from 'react';
type SizeOf = 'compact' | 'medium' | 'default' | 'relaxed';
export interface TableSkeletonProps {
    columns: number;
    rows: number;
    className?: string;
    size?: SizeOf;
}
export declare const TableSkeleton: React.FC<TableSkeletonProps>;
export {};
