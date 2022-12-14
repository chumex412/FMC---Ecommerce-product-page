import { lazy } from 'react';
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { loader as productLoader } from './Product';
import ErrorPage from './ErrorPage';

const Product = lazy(() => import('./Product'));
const Categories = lazy(() => import('./Categories'));

export const rootRouter = createHashRouter(
	createRoutesFromElements(
		<Route>
			<Route index path="/" element={<Categories />} />
			<Route path="product/:productId" element={<Product />} errorElement={<ErrorPage />} loader={productLoader} />
		</Route>
	)
);
