import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { currencyFormat } from '../../../../util';
import '../styles/product.css';

const Product = ({ name, brand, images, detail, price, discount }) => {
	const [singleImg, setSingleImg] = useState(() => images[0].img);

	const handleImgChange = (id) => {
		const newImg = images.find((imgItem) => imgItem.id === id);

		setSingleImg(newImg.img);
	};
	return (
		<section className="single-product-wrapper grid items-center py-20 px-12">
			<section>
				<figure className="mb-8 h-[450px] overflow-hidden rounded-lg">
					<img src={singleImg} className="img-fluid" alt="" />
				</figure>
				<div className={`grid grid-cols-4 gap-4`}>
					{images.map((imgItem, indx) => {
						return (
							<span className="overflow-hidden rounded-lg" key={imgItem.id} onClick={() => handleImgChange(imgItem.id)}>
								<img src={imgItem.thumbnail} alt={`Product ${indx + 1} thumbnail`} />
							</span>
						);
					})}
				</div>
			</section>
			<article>
				<h3 className="mb-3 text-base-md font-bold capitalize text-primary">{brand}</h3>
				<h4 className="mb-3 text-2xl font-bold capitalize">{name}</h4>
				<section>
					<p className="text-base text-gray-300">{detail}</p>
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
		</section>
	);
};

Product.propTypes = {
	name: PropTypes.string,
	brand: PropTypes.string,
	images: PropTypes.array,
	detail: PropTypes.string,
	price: PropTypes.number,
	discount: PropTypes.number
};

export default Product;
