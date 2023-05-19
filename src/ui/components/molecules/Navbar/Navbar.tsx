import { NavLink } from 'react-router-dom';
import { LinkProps, NavbarStructure } from './types';
import './navbar.css';

const Navbar: NavbarStructure = ({ children }) => (
	<nav className="rmt-navbar">{children}</nav>
);

Navbar.Link = ({ to, children }: LinkProps) => (
	<NavLink to={to} className="rmt-navbar__link">
		{children}
	</NavLink>
);

export default Navbar;
