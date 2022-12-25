import React from 'react';
import PropTypes from 'prop-types';

const SlideControls = ({ onclick = () => null, currentIndex = 0, length = 0, leftPos, rightPos }) => {
	return (
		<div className="text-dark text-xl">
			<button
				onClick={() => {
					onclick(currentIndex <= 0 ? length - 1 : currentIndex - 1);
				}}
				style={{ left: leftPos }}
				className="absolute top-[45%] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[50%] bg-white"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18">
					<path fill="none" stroke="#1D2026" strokeWidth="3" d="M11 1 3 9l8 8" />
				</svg>
			</button>
			<button
				onClick={() => {
					onclick((currentIndex + 1) % length);
				}}
				style={{ right: rightPos }}
				className="absolute top-[45%] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[50%] bg-white"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18">
					<path fill="none" stroke="#1D2026" strokeWidth="3" d="m2 1 8 8-8 8" />
				</svg>
			</button>
		</div>
	);
};

SlideControls.propTypes = {
	onclick: PropTypes.func,
	currentIndex: PropTypes.number,
	length: PropTypes.number,
	leftPos: PropTypes.string,
	rightPos: PropTypes.string
};

export default SlideControls;
