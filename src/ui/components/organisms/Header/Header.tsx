import { FC } from 'react';
import { HeaderProps } from './types';
import { Navbar } from '@rmt/molecules';
import { NavLink } from 'react-router-dom';
import rickAndMortyLogo from '/logo.svg';
import './header.css';

const Header: FC<HeaderProps> = ({ children, className = '' }) => (
	<header className={`rmt-header ${className}`}>
		<img src={rickAndMortyLogo} className="rmt-header__logo" alt="React logo" />
		<Navbar>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/results">Results</NavLink>
		</Navbar>
		{children}
	</header>
);

export default Header;
