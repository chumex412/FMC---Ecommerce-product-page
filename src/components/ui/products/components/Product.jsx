import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImgs from '../components/ProductImgs';
import ProductDetails from './ProductDetails';
import '../styles/product.css';
import { useMediaQuery } from '../../../../hooks';

const Product = ({ id, name, brand, images, detail, price, discount, addToCart = () => null }) => {
	const [singleImg, setSingleImg] = useState(images[0].img);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [count, setCount] = useState(0);

	const [isLargeScreen] = useMediaQuery('(min-width: 600px)');

	const handleImgChange = (index) => {
		setSingleImg(images[index].img);
		setCurrentIndex(index);
	};

	const updateCount = (action) => {
		if (action === 'reset') {
			setCount(0);
			return;
		}

		setCount((prev) => {
			if (action === 'increment') {
				return prev + 1;
			} else if (action === 'decrement') {
				return prev - 1;
			}
		});
	};

	return (
		<section className="single-product-wrapper grid items-center px-0 pb-20 sm:py-20 md:px-12">
			<ProductImgs
				images={images}
				img={singleImg}
				isLargeScreen={isLargeScreen}
				onclick={handleImgChange}
				current={currentIndex}
			/>
			<ProductDetails
				id={id}
				name={name}
				brand={brand}
				info={detail}
				img={images[0].thumbnail}
				price={price}
				discount={discount}
				count={count}
				updateCount={updateCount}
				addItem={addToCart}
			/>
		</section>
	);
};

Product.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	brand: PropTypes.string,
	images: PropTypes.array,
	detail: PropTypes.string,
	price: PropTypes.number,
	discount: PropTypes.number,
	addToCart: PropTypes.func
};

export default Product;
