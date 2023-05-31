import { Button } from '@rmt/atoms';
import arrowRight from '@rmt/assets/arrowRight.svg';
import arrowLeft from '@rmt/assets/arrowLeft.svg';
import './pagination.css';

export const Pagination = () => {
	return (
		<div className="rmt-pagination">
			<div className="rmt-pagination__container">
				<div className="rmt-pagination__main">
					<Button className="rmt-pagination__button">
						<img
							src={arrowLeft}
							className="rmt-header__logo"
							alt="React logo"
						/>
					</Button>
					<span className="rmt-pagination__page-count">4/10</span>
					<Button className="rmt-pagination__button">
						<img
							src={arrowRight}
							className="rmt-header__logo"
							alt="React logo"
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};
