import React from 'react';
import PropTypes from 'prop-types';

const MainImage = ({ currentImage }) => {
	return (
		<figure className="mb-8 flex justify-center overflow-hidden rounded-lg">
			<img src={currentImage} />
		</figure>
	);
};

MainImage.propTypes = {
	currentImage: PropTypes.string
};

export default MainImage;
