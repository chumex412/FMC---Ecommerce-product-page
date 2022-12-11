import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { rootRouter } from './pages';
import reportWebVitals from './reportWebVitals';

import '@fontsource/kumbh-sans';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading</div>}>
				<RouterProvider router={rootRouter} />
		</Suspense>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
