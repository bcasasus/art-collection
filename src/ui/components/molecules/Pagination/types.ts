export interface PaginationProps {
	totalPages: number;
	currentPage: number;
	onChangePage: (currentPage: number) => void;
}
