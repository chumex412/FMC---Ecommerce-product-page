import React from 'react';
import PropTypes from 'prop-types';
import { currencyFormat } from '../../../../util';
import { PlusIcon, MinusIcon, WhiteCartIcon } from '../../../../assets';

const ProductDetails = ({
	id,
	name,
	info,
	brand,
	price,
	discount,
	img,
	count = 0,
	updateCount = () => null,
	addItem = () => null
}) => {
	return (
		<article>
			<h3 className="mb-3 text-base-md font-bold capitalize leading-lh-small text-primary">{brand}</h3>
			<h4 className="mb-3 text-2xl font-bold capitalize leading-lh-small">{name}</h4>
			<section>
				<p className="text-base text-gray-300">{info}</p>
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
			<section className="action-btn-container mt-8 flex flex-col gap-6 sm:flex-row md:flex-col md:items-stretch lg:flex-row">
				<div className="flex items-center bg-gray-100 lg:basis-1/3">
					<button
						onClick={() => count > 0 && updateCount('decrement')}
						className="inline-flex h-full w-full items-center justify-center rounded-l-lg bg-transparent p-2"
					>
						<MinusIcon />
					</button>
					<p className="w-full bg-transparent py-2 px-6 text-center text-base font-bold">{count}</p>
					<button
						onClick={() => updateCount('increment')}
						className="inline-flex h-full w-full items-center justify-center rounded-r-lg bg-transparent p-2"
					>
						<PlusIcon />
					</button>
				</div>
				<button
					type="button"
					className="flex basis-2/3 items-center justify-center rounded-lg bg-primary py-2 px-4 text-base capitalize text-white"
					onClick={() => {
						if (count > 0) {
							addItem({ id, name, price: price - (price * discount) / 100, img, quantity: count });
							updateCount('reset');
						}
					}}
				>
					<WhiteCartIcon />
					<span className="ml-3">Add to cart</span>
				</button>
			</section>
		</article>
	);
};

ProductDetails.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	brand: PropTypes.string,
	info: PropTypes.string,
	price: PropTypes.number,
	img: PropTypes.string,
	discount: PropTypes.number,
	count: PropTypes.number,
	updateCount: PropTypes.func,
	addItem: PropTypes.func
};

export default ProductDetails;
