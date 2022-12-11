import React from 'react';
import NavLinks from './component/NavLinks';

import { BrandLogo, CartIcon, imgs } from '../../assets';
import './styles/navbar.css';

const NavBar = () => {
	return (
		<nav className="nav-bar container">
			<div className="nav-content grid items-center border-b border-gray-200 pt-4 pb-6">
				<div className="">
					<BrandLogo />
				</div>
				<NavLinks />
				<div className="flex items-center justify-center">
					<CartIcon />
					<img src={imgs.AvatarImg} className="img-fluid ml-4" width={40} alt="Avatar placeholder" />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
