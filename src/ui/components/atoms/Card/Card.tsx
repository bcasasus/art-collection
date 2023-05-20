import {
	BodyProps,
	CardStructure,
	FooterProps,
	HeaderProps,
	ImageProps,
	TitleProps,
} from './types';
import './card.css';

const Card: CardStructure = ({ children }) => (
	<article className="rmt-card">{children}</article>
);

Card.Header = ({ children }: HeaderProps) => (
	<header className="rmt-card__header">{children}</header>
);

Card.Title = ({ children }: TitleProps) => {
	const titleClassName =
		typeof children === 'string'
			? children.length >= 20
				? 'rmt-card__title rmt-card__title--small'
				: 'rmt-card__title'
			: 'rmt-card__title';

	return <h2 className={titleClassName}>{children}</h2>;
};

Card.Body = ({ children }: BodyProps) => (
	<div className="rmt-card__body">{children}</div>
);

Card.Image = ({ src, alt }: ImageProps) => (
	<img className="rmt-card__img" src={src} alt={alt} />
);

Card.Footer = ({ children }: FooterProps) => (
	<footer className="rmt-card__footer">{children}</footer>
);

export default Card;
