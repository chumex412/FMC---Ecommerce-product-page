import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../data';

import '../styles/navbar.css';

const NavLinks = () => {
	return (
		<ul className={`nav-list flex flex-col items-center gap-2 md:flex-row `}>
			{navLinks.map((link, indx) => {
				return (
					<li className="nav-item" key={indx + 1}>
						<NavLink
							to={link.path}
							className={({ isActive, isPending }) =>
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
