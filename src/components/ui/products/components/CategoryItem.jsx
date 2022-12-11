import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { currencyFormat } from '../../../../util';

import '../styles/product.css';

const CategoryItem = ({ id, discount, name, price, img }) => {
	return (
		<article className="product-card">
			<div>
				<img src={img} className="img-fluid" alt={`Graphical illustration of ${name}`} />
			</div>
			<section className="product-content p-2">
				<h4 className="mb-2 text-lg font-bold capitalize leading-lh-small">
					<Link className="text-neutral" to={`/product/${id}`}>
						{name}
					</Link>
				</h4>
				<div className="mt-4">
					<p className="leading-lh-big mb-2 flex items-start font-bold">
						<span className="text-base-md">{currencyFormat(price - (price * discount) / 100)}</span>
						<small className="leading-lh-big ml-2 inline-block bg-primary-light py-0.5 px-1 text-base-sm text-primary">
							{discount}%
						</small>
					</p>
					<p className="text-base font-medium text-gray-200 line-through">{currencyFormat(price)}</p>
				</div>
			</section>
		</article>
	);
};

CategoryItem.propTypes = {
	id: PropTypes.string,
	discount: PropTypes.number,
	name: PropTypes.string,
	price: PropTypes.number,
	img: PropTypes.string
};

export default CategoryItem;
