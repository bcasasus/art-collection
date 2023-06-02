export interface UsePaginationStructure {
	currentPage: number;
	pageCountString: string;
	nextPage: () => void;
	previousPage: () => void;
}
