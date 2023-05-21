import { FC, ReactNode } from 'react';

export interface HeaderProps {
	children: ReactNode;
	className?: string;
}

export interface TitleProps {
	children: ReactNode;
	className?: string;
}

export interface BodyProps {
	children: ReactNode;
	className?: string;
}

export interface ImageProps {
	src: string;
	alt: string;
	className?: string;
}

export interface FooterProps {
	children: ReactNode;
	className?: string;
}

interface CardProps {
	children: ReactNode;
	className?: string;
}

export interface CardStructure extends FC<CardProps> {
	Header: FC<HeaderProps>;
	Title: FC<TitleProps>;
	Body: FC<BodyProps>;
	Image: FC<ImageProps>;
	Footer: FC<FooterProps>;
}
