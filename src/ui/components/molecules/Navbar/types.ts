import { FC, HTMLAttributes, ReactNode } from 'react';

export interface NavbarProps {
	children: ReactNode;
}

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
	to: string;
	children: ReactNode;
}

export interface NavbarStructure extends FC<NavbarProps> {
	Link: FC<LinkProps>;
}
