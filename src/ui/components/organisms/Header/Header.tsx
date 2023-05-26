import { FC } from 'react';
import { HeaderProps } from './types';
import { Navbar } from '@rmt/molecules';
import rickAndMortyLogo from '@rmt/assets/logo.svg';
import './header.css';

export const Header: FC<HeaderProps> = ({ children, className = '' }) => (
	<header className={`rmt-header ${className}`}>
		<div className="rmt-header__container">
			<div className="rmt-header__logo-section">
				<img
					src={rickAndMortyLogo}
					className="rmt-header__logo"
					alt="React logo"
				/>
				<h1 className="rmt-header__title">The Rick and Morty Tracker</h1>
			</div>
			<Navbar>
				<Navbar.Link to="/">Home</Navbar.Link>
				<Navbar.Link to="/results">Results</Navbar.Link>
			</Navbar>
		</div>
		{children}
	</header>
);
