import { FC, ReactNode } from 'react';

export interface HeaderProps {
	children: ReactNode;
}

export interface TitleProps {
	children: ReactNode;
}

export interface BodyProps {
	children: ReactNode;
}

export interface ImageProps {
	src: string;
	alt: string;
}

export interface FooterProps {
	children: ReactNode;
}

interface CardProps {
	children: ReactNode;
	onClick?: () => void;
}

export interface CardStructure extends FC<CardProps> {
	Header: FC<HeaderProps>;
	Title: FC<TitleProps>;
	Body: FC<BodyProps>;
	Image: FC<ImageProps>;
	Footer: FC<FooterProps>;
}
