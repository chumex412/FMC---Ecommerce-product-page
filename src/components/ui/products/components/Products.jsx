import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

const Products = ({ list }) => {
	return (
		<section className="product-list grid grid-cols-1 items-center py-8 sm:grid-cols-2 lg:grid-cols-4">
			{list.map((item) => {
				const { id, name, moreInfo, price, images } = item;
				return (
					<CategoryItem key={id} id={id} name={name} discount={moreInfo.discount} price={price} img={images[0].img} />
				);
			})}
		</section>
	);
};

Products.propTypes = {
	list: PropTypes.array
};

export default Products;
