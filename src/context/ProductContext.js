import React, { useContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { productReducer as reducer } from '../application/reducers';
import { ADDTOCART, DELETEITEM } from '../application/constants';

export const AppContext = React.createContext();

const initialState = { cart: [] };

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const [showSidebar, setShowSidebar] = useState(false);

	const addToCart = ({ id, img, name, price, quantity }) => {
		const newItem = { id, img, name, price, quantity };
		dispatch({ type: ADDTOCART, payload: newItem });
	};

	const removeItem = (id) => {
		dispatch({ type: DELETEITEM, payload: { id } });
	};

	const openSidebar = () => {
		setShowSidebar((prev) => {
			prev = true;
			return prev;
		});
	};

	const closeSidebar = () => {
		setShowSidebar((prev) => {
			prev = false;
			return prev;
		});
	};

	return (
		<AppContext.Provider value={{ addToCart, removeItem, openSidebar, closeSidebar, showSidebar, state }}>
			{children}
		</AppContext.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.element
};

export default function useGlobalContext() {
	return useContext(AppContext);
}
