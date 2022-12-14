import React from 'react';
import PropTypes from 'prop-types';

const ProductImgs = ({ images, img }) => {
	return (
		<section>
			<figure className="mb-8 overflow-hidden rounded-lg lg:h-[450px]">
				<img src={img} className="img-fluid" alt="" />
			</figure>
			<div className={`grid grid-cols-4 gap-4`}>
				{images.map((imgItem, indx) => {
					return (
						<span className="overflow-hidden rounded-lg" key={imgItem.id} onClick={() => null}>
							<img src={imgItem.thumbnail} alt={`Product ${indx + 1} thumbnail`} />
						</span>
					);
				})}
			</div>
		</section>
	);
};

ProductImgs.propTypes = {
	images: PropTypes.array,
	img: PropTypes.string
};

export default ProductImgs;
