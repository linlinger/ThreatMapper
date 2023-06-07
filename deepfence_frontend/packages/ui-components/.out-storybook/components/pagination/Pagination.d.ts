/// <reference types="react" />
import { UsePaginationOptions } from '../../components/hooks/usePagination';
type OwnProps = {
    onPageChange: (page: number) => void;
    approximatePagination?: boolean;
    totalRows: number;
    pageSize?: number;
};
type Props = Partial<Pick<UsePaginationOptions, 'currentPage' | 'siblingCount'>> & OwnProps;
export declare const Pagination: {
    ({ currentPage, pageSize, onPageChange, totalRows, siblingCount, approximatePagination, }: Props): JSX.Element;
    displayName: string;
};
export default Pagination;
