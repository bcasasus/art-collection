import { ImageProps } from '@rmt/atoms';
import { FC, ReactNode } from 'react';

export interface CardHeaderProps {
	children: ReactNode;
	className?: string;
}

export interface CardTitleProps {
	children: ReactNode;
	className?: string;
}

export interface CardBodyProps {
	children: ReactNode;
	className?: string;
}

export interface CardFooterProps {
	children: ReactNode;
	className?: string;
}

interface CardProps {
	children: ReactNode;
	className?: string;
}

export interface CardStructure extends FC<CardProps> {
	Header: FC<CardHeaderProps>;
	Title: FC<CardTitleProps>;
	Body: FC<CardBodyProps>;
	Image: FC<ImageProps>;
	Footer: FC<CardFooterProps>;
}
