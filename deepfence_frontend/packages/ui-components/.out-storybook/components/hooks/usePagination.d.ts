export type UsePaginationOptions = {
    currentPage: number;
    totalNumberOfPages: number;
    siblingCount: number;
    likelyToHaveMorePages: boolean;
};
export declare const usePagination: ({ currentPage, totalNumberOfPages, siblingCount, likelyToHaveMorePages: likelyToHaveMorePages, }: UsePaginationOptions) => (number | "DOTS")[];
