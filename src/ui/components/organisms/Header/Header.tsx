import { FC } from 'react';
import { HeaderProps } from './types';
import { Navbar } from '@rmt/molecules';
import rickAndMortyLogo from '@rmt/assets/logo.svg';
import './header.css';

const Header: FC<HeaderProps> = ({ children, className = '' }) => (
	<header className={`rmt-header ${className}`}>
		<div className="rmt-header__section">
			<img
				src={rickAndMortyLogo}
				className="rmt-header__logo"
				alt="React logo"
			/>
			The Rick and Morty Tracker
		</div>
		<Navbar>
			<Navbar.Link to="/">Home</Navbar.Link>
			<Navbar.Link to="/results">Results</Navbar.Link>
		</Navbar>
		{children}
	</header>
);

export default Header;
