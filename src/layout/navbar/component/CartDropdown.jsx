import React from 'react';
import PropTypes from 'prop-types';
import { DeleteIcon } from '../../../assets';
import { currencyFormat } from '../../../util';

const CartDropdown = ({ list = [], show = false, remove = () => null }) => {
	return (
		<section
			className={`cart-dropdown absolute top-[110%] left-0 z-10 w-full rounded-lg border border-gray-100 bg-gray-100 py-2 transition-opacity sm:left-auto sm:right-0 sm:top-[85%] sm:max-w-[400px] ${
				show ? 'opacity-1 visible' : 'invisible opacity-0'
			}`}
		>
			<h3 className="border-b border-gray-200 px-3 pt-1 pb-3 text-base-md font-bold text-neutral">Cart</h3>
			<section className="px-4">
				<section className="cart-list min-h-[100px]">
					{list.length > 0 ? (
						list.map((item) => {
							return (
								<article
									style={{ gridTemplateColumns: 'auto 1fr auto' }}
									key=""
									className="grid items-center gap-2 py-3"
								>
									<div>
										<img src={item.img} className="h-16 w-16" alt="" />
									</div>
									<div>
										<h4 className="text-base-md font-medium capitalize text-gray-300">{item.name}</h4>
										<p className="text-base">
											<span className="text-gray-2 mr-2">
												{currencyFormat(item.price)} x {item.quantity}
											</span>{' '}
											<strong>{currencyFormat(item.price * item.quantity)}</strong>
										</p>
									</div>
									<button onClick={() => remove(item.id)}>
										<DeleteIcon />
									</button>
								</article>
							);
						})
					) : (
						<div className="flex h-[200px] items-center justify-center text-base-md font-bold text-neutral">
							<p>No cart items yet</p>
						</div>
					)}
				</section>
				{list.length > 0 && (
					<button className="w-full rounded-lg bg-primary py-4 px-4 text-base font-bold text-white">Checkout</button>
				)}
			</section>
		</section>
	);
};

CartDropdown.propTypes = {
	list: PropTypes.array,
	//position: PropTypes.number
	show: PropTypes.bool,
	remove: PropTypes.func
};

export default CartDropdown;
