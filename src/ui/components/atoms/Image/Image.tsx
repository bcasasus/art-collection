import { ImageProps } from './types';
import './image.css';

export const Image = ({ src, alt, className = '' }: ImageProps) => (
	<figure className="rmt-picture">
		<img className={`rmt-picture__img ${className}`} src={src} alt={alt} />
	</figure>
);
