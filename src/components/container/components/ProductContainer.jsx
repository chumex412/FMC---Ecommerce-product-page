import React from 'react';
import PropTypes from 'prop-types';
import { withTogglerLayout } from '../../../hoc/layout';
import { Product } from '../../ui/products';

const ProductContainer = ({ id, product, addToCart }) => {
	return (
		<main className="container">
			<Product
				id={id}
				name={product.name}
				brand={product.brand}
				images={product.images}
				price={product.price}
				detail={product.details}
				discount={product.moreInfo.discount}
				addToCart={addToCart}
			/>
		</main>
	);
};

ProductContainer.propTypes = {
	id: PropTypes.string,
	product: PropTypes.object,
	addToCart: PropTypes.func
};

export default withTogglerLayout(ProductContainer);
