import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useGlobalContext from '../context/ProductContext';
import { ProductContainer } from '../components/container';
import { getProduct } from '../data';

export async function loader({ params }) {
	return getProduct(params.productId);
}

const Product = () => {
	const { id, product } = useLoaderData();
	const { addToCart } = useGlobalContext();

	return (
		<>
			<ProductContainer id={id} product={product} addToCart={addToCart} />
		</>
	);
};

export default Product;
