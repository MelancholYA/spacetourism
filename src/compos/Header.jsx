import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/shared/logo.svg';

const Header = () => {
	const [showMenu, toggleMenu] = useState(false);
	return (
		<header>
			<img src={Logo} />
			<button onClick={() => toggleMenu(!showMenu)}>
				<span className={showMenu ? 'closeButton' : ''}></span>
			</button>
			<div
				className={showMenu ? 'links open' : 'links'}
				onClick={() => toggleMenu(!showMenu)}>
				<NavLink exact to='/'>
					00 HOME
				</NavLink>
				<NavLink exact to='/destination'>
					01 DESTINATION
				</NavLink>
				<NavLink exact to='/crew'>
					02 CREW
				</NavLink>
				<NavLink exact to='/technology'>
					03 TECHNOLOGY
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
