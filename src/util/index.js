export const generateRandomId = () => {
	return Object.freeze({ id: Date.now().toString(20) + Math.random().toString(20).substring(2) });
};

export const currencyFormat = (amount = 0, currency = 'USD', region = 'en-US') => {
	return new Intl.NumberFormat(region, { currency, style: 'currency' }).format(amount);
};
