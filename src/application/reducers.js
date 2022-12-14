import { ADDTOCART, DELETEITEM } from './constants';

export const productReducer = (state, action) => {
	if (action.type === ADDTOCART) {
		const newCart = [action.payload].reduce((cart, item) => {
			const foundCartItem = state.cart.find((cartItem) => cartItem.id === item.id);

			if (foundCartItem) {
				cart.push({ ...foundCartItem, quantity: foundCartItem.quantity + item.quantity });
			} else {
				cart.push(...[...state.cart, item]);
			}

			return cart;
		}, []);

		return { cart: newCart };
	}

	if (action.type === DELETEITEM) {
		return { cart: state.cart.filter((item) => item.id !== action.payload.id) };
	}

	return state;
};
