import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavLinks from './component/NavLinks';
import CartDropdown from './component/CartDropdown';

import { BrandLogo, CartIcon, imgs, MenuIcon } from '../../assets';
import './styles/navbar.css';
import useGlobalContext from '../../context/ProductContext';

const NavBar = ({ show, toggleCart, openSidebar }) => {
	const { state, removeItem } = useGlobalContext();
	const [amount, setAmount] = useState();
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const amount = state.cart.reduce((tally, current) => {
			return tally + current.quantity;
		}, 0);

		setCart(state.cart);

		setAmount(amount);
	}, [state.cart]);

	return (
		<nav className="nav-bar container sticky top-[0] bg-white">
			<div className="nav-content relative grid items-center border-b border-gray-200 pt-4 pb-6">
				<div className="flex items-center">
					<button aria-label="Open sidebar menu" className="mr-4 block md:hidden" onClick={openSidebar}>
						<MenuIcon />
					</button>
					<BrandLogo />
				</div>
				<NavLinks />
				<div className="flex items-center justify-center">
					<div className="relative flex items-center">
						<p className="absolute -top-[10px] left-1/2 -translate-x-1/2 rounded-[50%] bg-primary px-[6px] text-base-sm font-bold text-white">
							{amount}
						</p>
						<button onClick={toggleCart}>
							<CartIcon />
						</button>
					</div>
					<img src={imgs.AvatarImg} className="img-fluid ml-4" width={40} alt="Avatar placeholder" />
				</div>
				<CartDropdown show={show} list={cart} remove={removeItem} />
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	show: PropTypes.bool,
	toggleCart: PropTypes.func,
	openSidebar: PropTypes.func
};

export default NavBar;
