import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../layout/navbar/NavBar';
import { Product as SingleProduct } from '../components/ui/products';
import { getProduct } from '../data';

export async function loader({ params }) {
	return getProduct(params.productId);
}

const Product = () => {
	const product = useLoaderData();
	console.log(product);
	return (
		<>
			<NavBar />
			<main className="container">
				<SingleProduct
					name={product.name}
					brand={product.brand}
					images={product.images}
					price={product.price}
					detail={product.details}
					discount={product.moreInfo.discount}
				/>
			</main>
		</>
	);
};

export default Product;
