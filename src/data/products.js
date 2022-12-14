import { imgs } from '../assets';

export const sneakersProducts = [
	{
		id: '3554f23ij785degcb95j128',
		name: 'fall limited edition sneakers',
		brand: 'sneaker company',
		price: 250,
		details:
			"These low-profile sneakers are your perfect casual wear companion. Feauring a durable rubber outer sole, they'll withstand everything the weather can offer",
		images: [
			{
				id: 1,
				img: imgs.product1Big,
				thumbnail: imgs.product1Small
			},
			{
				id: 2,
				img: imgs.product2Big,
				thumbnail: imgs.product2Small
			},
			{
				id: 3,
				img: imgs.product3Big,
				thumbnail: imgs.product3Small
			},
			{
				id: 4,
				img: imgs.product4Big,
				thumbnail: imgs.product4Small
			}
		],
		moreInfo: {
			discount: 50
		}
	}
];

export function getProduct(id) {
	return { id, product: sneakersProducts.find((product) => product.id === id) };
}

//const base = {
//	name: '',
//	brand: '',
//	price: '',
//	details: '',
//	image: '',
//	moreInfo: {
//		discount: '',
//		thumbnails: ['']
//	}
//};
