import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemProps, NavbarStructure } from './types';
import './navbar.css';

const Navbar: NavbarStructure = ({ children }) => (
	<nav className="rmt-navbar">{children}</nav>
);

const NavItem: FC<NavItemProps> = ({ to, children }) => (
	<NavLink to={to} className="rmt-navbar__link">
		{children}
	</NavLink>
);

Navbar.Link = NavItem;

export default Navbar;
