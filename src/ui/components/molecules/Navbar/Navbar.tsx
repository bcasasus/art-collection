import { NavLink } from 'react-router-dom';
import { NavbarLinkProps, NavbarStructure } from './types';
import './navbar.css';

export const Navbar: NavbarStructure = ({ children }) => (
	<nav className="rmt-navbar">{children}</nav>
);

Navbar.Link = ({ to, children }: NavbarLinkProps) => (
	<NavLink to={to} className="rmt-navbar__link">
		{children}
	</NavLink>
);
