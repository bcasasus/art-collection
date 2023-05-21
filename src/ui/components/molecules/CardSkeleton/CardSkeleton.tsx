import imageSkeleton from '@rmt/assets/skeletonImg.svg';
import './cardSkeleton.css';

const CardSkeleton = () => (
	<div className="rmt-card-skeleton">
		<div className="rmt-card-skeleton__media">
			<img
				src={imageSkeleton}
				className="rmt-card-skeleton__img"
				alt="skeleton image"
			/>
		</div>
		<div className="rmt-card-skeleton__header">
			<div className="rmt-card-skeleton__title"></div>
		</div>
	</div>
);

export default CardSkeleton;
