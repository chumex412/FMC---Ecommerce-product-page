import React, { useState, useEffect } from 'react';
import NavBar from '../layout/navbar/NavBar';
import { Products } from '../components/ui/products';
import { sneakersProducts } from '../data';

function Categories() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(sneakersProducts);
	}, []);

	return (
		<>
			<NavBar />
			<main className="container">
				<section className="product-content">
					<Products list={products} />
				</section>
			</main>
		</>
	);
}

export default Categories;
