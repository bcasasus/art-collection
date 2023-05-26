import { Image } from '@rmt/atoms';
import {
	CardBodyProps,
	CardStructure,
	CardFooterProps,
	CardHeaderProps,
	CardTitleProps,
} from './types';
import './card.css';

export const Card: CardStructure = ({ children, className = '' }) => (
	<article className={`rmt-card ${className}`}>{children}</article>
);

Card.Header = ({ children, className = '' }: CardHeaderProps) => (
	<header className={`rmt-card__header ${className}`}>{children}</header>
);

Card.Title = ({ children, className = '' }: CardTitleProps) => {
	const titleClassName =
		typeof children === 'string'
			? children.length >= 20
				? 'rmt-card__title rmt-card__title--small'
				: 'rmt-card__title'
			: 'rmt-card__title';

	return <h2 className={`${titleClassName} ${className}`}>{children}</h2>;
};

Card.Body = ({ children, className = '' }: CardBodyProps) => (
	<div className={`rmt-card__body ${className}`}>{children}</div>
);

Card.Image = Image;

Card.Footer = ({ children, className = '' }: CardFooterProps) => (
	<footer className={`rmt-card__footer ${className}`}>{children}</footer>
);
