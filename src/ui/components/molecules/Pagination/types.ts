export interface PaginationProps {
	totalPages: number;
	initialPage?: number;
	onChangePage: (currentPage: number) => void;
}
