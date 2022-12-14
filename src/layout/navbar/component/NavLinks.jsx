import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../data';

import '../styles/navbar.css';

const NavLinks = () => {
	return (
		<ul className={`nav-list hidden flex-row items-center gap-6 md:flex `}>
			{navLinks.map((link, indx) => {
				return (
					<li className="nav-item" key={indx + 1}>
						<NavLink
							to={link.path}
							className={({ isActive }) =>
								isActive ? 'text-base-md capitalize text-gray-200' : 'text-base-md capitalize text-gray-300'
							}
						>
							{link.name}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

export default NavLinks;
