import {
	BodyProps,
	CardStructure,
	FooterProps,
	HeaderProps,
	ImageProps,
	TitleProps,
} from './types';
import './card.css';

const Card: CardStructure = ({ children, className = '' }) => (
	<article className={`rmt-card ${className}`}>{children}</article>
);

Card.Header = ({ children, className = '' }: HeaderProps) => (
	<header className={`rmt-card__header ${className}`}>{children}</header>
);

Card.Title = ({ children, className = '' }: TitleProps) => {
	const titleClassName =
		typeof children === 'string'
			? children.length >= 20
				? 'rmt-card__title rmt-card__title--small'
				: 'rmt-card__title'
			: 'rmt-card__title';

	return <h2 className={`${titleClassName} ${className}`}>{children}</h2>;
};

Card.Body = ({ children, className = '' }: BodyProps) => (
	<div className={`rmt-card__body ${className}`}>{children}</div>
);

Card.Image = ({ src, alt, className = '' }: ImageProps) => (
	<img className={`rmt-card__img ${className}`} src={src} alt={alt} />
);

Card.Footer = ({ children, className = '' }: FooterProps) => (
	<footer className={`rmt-card__footer ${className}`}>{children}</footer>
);

export default Card;
