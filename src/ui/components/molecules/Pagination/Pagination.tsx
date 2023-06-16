import { Button } from '@rmt/atoms';
import arrowForward from '@rmt/assets/arrowForward.svg';
import arrowBack from '@rmt/assets/arrowBack.svg';
import { PaginationProps } from './types';
import { usePagination } from '@rmt/hooks';
import './pagination.css';

export const Pagination = ({
	totalPages,
	initialPage,
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
							className="rmt-pagination__arrow-back"
							alt="Arrow back"
						/>
					</Button>
					<span className="rmt-pagination__page-count">{pageCountString}</span>
					<Button className="rmt-pagination__button" onClick={nextPage}>
						<img
							src={arrowForward}
							className="rmt-pagination__arrow-forward"
							alt="Arrow forward"
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};
