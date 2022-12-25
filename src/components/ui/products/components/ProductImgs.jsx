import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../../common';
import LightHouse from '../../light-house/components/LightHouse';
import SlideControls from '../../slide-control/SlideControls';

const ProductImgs = ({ images = [], img, isLargeScreen, onclick = () => null, current = 0 }) => {
	const [showModal, setShowModal] = useState(false);
	const [lightBoxImg, setLightBoxImg] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	const changeImg = useCallback(function (index) {
		setLightBoxImg(images[index].img);
		setCurrentIndex(index);
	});

	const closeModal = function () {
		setShowModal(false);
	};

	return (
		<section className="relative">
			<figure
				className="overflow-hidden sm:mb-8 sm:rounded-lg lg:h-[450px]"
				onClick={() => {
					if (isLargeScreen) {
						setShowModal(true);
						changeImg(current);
					}
				}}
			>
				<img src={img} className="img-fluid" alt="" />
			</figure>
			<div className={`hidden grid-cols-4 gap-4 sm:grid`}>
				{images.map((imgItem, indx) => {
					return (
						<span
							className={`transition-border overflow-hidden rounded-lg duration-300 ${
								current === indx && 'border-2 border-primary'
							}`}
							key={imgItem.id}
							onClick={() => {
								onclick(indx);
							}}
						>
							<img
								src={imgItem.thumbnail}
								className={`transition-opacity duration-300 ${current === indx && 'opacity-25'}`}
								alt={`Product ${indx + 1} thumbnail`}
							/>
						</span>
					);
				})}
			</div>
			{showModal && (
				<Modal show={showModal} closeModal={closeModal} maxWidth={500}>
					<LightHouse images={images} lightHouseImg={lightBoxImg} currentIndex={currentIndex} changeImg={changeImg} />
				</Modal>
			)}
			{!isLargeScreen && (
				<SlideControls onclick={onclick} currentIndex={current} length={images.length} rightPos="5%" leftPos="5%" />
			)}
		</section>
	);
};

ProductImgs.propTypes = {
	images: PropTypes.array,
	img: PropTypes.string,
	isLargeScreen: PropTypes.bool,
	current: PropTypes.number,
	onclick: PropTypes.func
};

export default ProductImgs;
