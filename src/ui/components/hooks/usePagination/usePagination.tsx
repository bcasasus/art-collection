import { useEffect, useRef, useState } from 'react';
import { UsePaginationStructure } from './types';

export const usePagination = (
	totalPages = 1,
	initialPage = 1,
	onChangePage: (currentPage: number) => void
): UsePaginationStructure => {
	const [currentPage, setCurrentPage] = useState<number>(initialPage);
	const pageCountString = `${currentPage} / ${totalPages}`;
	const didMount = useRef(false);

	useEffect(() => {
		if (!didMount.current) {
			didMount.current = true;
		} else {
			onChangePage(currentPage);
		}
	}, [currentPage, onChangePage]);

	const nextPage = () => {
		setCurrentPage((currentPage) => Math.max(currentPage + 1, 1));
	};

	const previousPage = () => {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	};

	return {
		currentPage,
		pageCountString,
		nextPage,
		previousPage,
	};
};
