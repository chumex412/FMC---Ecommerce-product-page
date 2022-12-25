import React from 'react';
import PropTypes from 'prop-types';
import MainImage from './MainImage';
import SlideControls from '../../slide-control/SlideControls';

const LightHouse = ({ images = [], lightHouseImg, currentIndex = 0, changeImg = () => null }) => {
	return (
		<section className="bg-transparent">
			<MainImage currentImage={lightHouseImg} />
			<div className={`flex justify-center gap-4 px-8`}>
				{images.map((image, indx) => {
					return (
						<span
							className={`overflow-hidden rounded-lg bg-white ${currentIndex === indx && 'border-2 border-primary'}`}
							data-image={image.img}
							key={indx + 1}
							onClick={() => changeImg(indx)}
						>
							<img
								className={`transition-opacity duration-300 ${currentIndex === indx && 'opacity-25'}`}
								src={image.thumbnail}
							/>
						</span>
					);
				})}
			</div>
			<SlideControls
				onclick={changeImg}
				currentIndex={currentIndex}
				length={images.length}
				leftPos="-1rem"
				rightPos="-1rem"
			/>
		</section>
	);
};

LightHouse.propTypes = {
	lightHouseImg: PropTypes.string,
	currentIndex: PropTypes.number,
	images: PropTypes.array,
	changeImg: PropTypes.func
};

export default LightHouse;
