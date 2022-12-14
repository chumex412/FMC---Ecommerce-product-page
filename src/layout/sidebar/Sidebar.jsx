import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '../../assets';
import { navLinks } from '../../data';

import './sidebar.css';

const Sidebar = ({ show = false, close = () => null }) => {
	return (
		<div>
			<aside
				className={`fixed top-0 left-0 z-20 grid h-full w-full max-w-[220px] bg-white transition-transform duration-300 md:hidden ${
					show ? 'translate-0' : '-translate-x-[120%]'
				}`}
				aria-label="Mobile Sidebar Menu"
			>
				<button onClick={close} className="px-4" aria-label="Close sidebar menu">
					<CloseIcon />
				</button>
				<ul>
					{navLinks.map((item) => {
						return (
							<li key={item.path}>
								<NavLink
									className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
									to={item.path}
								>
									{item.name}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</aside>
			<div
				onClick={close}
				className={`backdrop fixed top-0 left-0 block h-full w-full transition-transform duration-300 ${
					show ? 'scale-x-1' : 'scale-x-0'
				}`}
				hidden
				aria-hidden="true"
				tabIndex="-1"
			></div>
		</div>
	);
};

Sidebar.propTypes = {
	show: PropTypes.bool,
	close: PropTypes.func
};

export default Sidebar;
