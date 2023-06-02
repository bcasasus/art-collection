import { Button } from '@rmt/atoms';
import arrowForward from '@rmt/assets/arrowForward.svg';
import arrowBack from '@rmt/assets/arrowBack.svg';
import { PaginationProps } from './types';
import { usePagination } from '@rmt/hooks';
import './pagination.css';

const INITIAL_PAGE = 1;

export const Pagination = ({
	totalPages,
	initialPage = INITIAL_PAGE,
	onChangePage,
}: PaginationProps): JSX.Element => {
	const { nextPage, previousPage, pageCountString } = usePagination(
		totalPages,
		initialPage,
		onChangePage
	);

	return (
		<div className="rmt-pagination">
			<div className="rmt-pagination__container">
				<div className="rmt-pagination__main">
					<Button className="rmt-pagination__button" onClick={previousPage}>
						<img
							src={arrowBack}
							className="rmt-header__logo"
							alt="React logo"
						/>
					</Button>
					<span className="rmt-pagination__page-count">{pageCountString}</span>
					<Button className="rmt-pagination__button" onClick={nextPage}>
						<img
							src={arrowForward}
							className="rmt-header__logo"
							alt="React logo"
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};
