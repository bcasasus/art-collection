import { useCharacters } from '@rmt/hooks';
import { scrollTo } from '@rmt/utils';
import { Pagination } from '../Pagination/Pagination';
import { useResultsContext } from '../../pages/Results/context/useResultsContext';
import { useResultsDispatchContext } from '../../pages/Results/context/useResultsDispatchContext';

export const CharactersPagination = () => {
	const { fetchCharacters } = useCharacters();
	const { pagination, filters } = useResultsContext();
	const { setPaginationCurrentPage } = useResultsDispatchContext();

	const handleChangePagination = async (newPage: number) => {
		const mainElement = document.querySelector('.rmt-results-page__main');
		if (mainElement) {
			scrollTo(mainElement as HTMLElement);
		}

		const params = {
			...filters,
			page: newPage,
		};

		setPaginationCurrentPage({ currentPage: newPage });
		await fetchCharacters(params);
	};

	return (
		<Pagination
			totalPages={pagination.totalPages}
			currentPage={pagination.currentPage}
			onChangePage={handleChangePagination}
		/>
	);
};
