import { FC } from 'react';
import { HeaderProps } from './types';
import './header.css';
import { Navbar } from '@rmt/molecules';
import { NavLink } from 'react-router-dom';
import rickAndMortyLogo from '/logo.svg';

const Header: FC<HeaderProps> = ({ children }) => (
	<header className="rmt-header">
		<img src={rickAndMortyLogo} className="rmt-header__logo" alt="React logo" />
		<Navbar>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/results">Results</NavLink>
		</Navbar>
		{children}
	</header>
);

export default Header;
