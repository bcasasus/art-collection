import { FC, HTMLAttributes, ReactNode } from 'react';

export interface NavbarProps {
	children: ReactNode;
}

// export interface LogoProps {
// 	children: ReactNode;
// }
// export interface ContentProps {
// 	children: ReactNode;
// }

export interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
	to: string;
	children: ReactNode;
}

export interface NavbarStructure extends FC<NavbarProps> {
	Link: FC<NavItemProps>;
}
