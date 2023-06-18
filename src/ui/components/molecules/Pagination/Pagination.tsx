import { Button } from '@rmt/atoms';
import arrowForward from '@rmt/assets/arrowForward.svg';
import arrowBack from '@rmt/assets/arrowBack.svg';
import { PaginationProps } from './types';
import './pagination.css';

export const Pagination = ({
	totalPages,
	currentPage,
	onChangePage,
}: PaginationProps): JSX.Element => {
	const pageCountString = `${currentPage} / ${totalPages}`;

	const handleClickPreviousPage = () => {
		if (currentPage === 1) return;

		const previousPage = currentPage - 1;
		onChangePage(previousPage);
	};

	const handleClickNextPage = () => {
		if (currentPage === totalPages) return;

		const nextPage = currentPage + 1;
		onChangePage(nextPage);
	};

	return (
		<div className="rmt-pagination">
			<div className="rmt-pagination__container">
				<div className="rmt-pagination__main">
					<Button
						className="rmt-pagination__button"
						onClick={handleClickPreviousPage}
					>
						<img
							src={arrowBack}
							className="rmt-pagination__arrow-back"
							alt="Arrow back"
						/>
					</Button>
					<span className="rmt-pagination__page-count">{pageCountString}</span>
					<Button
						className="rmt-pagination__button"
						onClick={handleClickNextPage}
					>
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
