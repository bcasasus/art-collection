import { Image } from '@rmt/atoms';
import {
	DisplayErrorImageContainerProps,
	DisplayErrorImageSizeMapper,
	DisplayErrorStructure,
	DisplayErrorTitleProps,
} from './types';
import './displayError.css';

export const DisplayError: DisplayErrorStructure = ({
	children,
}): JSX.Element => <div className="rmt-display-error">{children}</div>;

DisplayError.Title = ({ children }: DisplayErrorTitleProps): JSX.Element => (
	<h3 className="rmt-display-error__title">{children}</h3>
);

DisplayError.ImageContainer = ({
	children,
	size = 'medium',
}: DisplayErrorImageContainerProps): JSX.Element => {
	return (
		<div
			className={`rmt-display-error__image-container ${DisplayErrorImageSizeMapper[size]}`}
		>
			{children}
		</div>
	);
};

DisplayError.Image = Image;
