import { FC, HTMLAttributes, ReactNode } from 'react';

export interface NavbarProps {
	children: ReactNode;
}

export interface NavbarLinkProps extends HTMLAttributes<HTMLAnchorElement> {
	to: string;
	children: ReactNode;
}

export interface NavbarStructure extends FC<NavbarProps> {
	Link: FC<NavbarLinkProps>;
}
