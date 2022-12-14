import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, Sidebar } from '../layout';

class NavAndCartToggler extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showCart: false,
			showSidebar: false
		};
	}

	toggleCart = () => {
		this.setState((prevState) => {
			return {
				showCart: !prevState.showCart,
				showSidebar: false
			};
		});
	};

	openSidebar = () => {
		this.setState(() => {
			return {
				showCart: false,
				showSidebar: true
			};
		});
	};

	closeSidebar = () => {
		this.setState((prevState) => {
			return {
				...prevState,
				showSidebar: false
			};
		});
	};

	render() {
		const C = this.props.component;
		const {
			toggleCart,
			openSidebar,
			closeSidebar,
			state: { showCart, showSidebar }
		} = this;

		return (
			<>
				<NavBar show={showCart} toggleCart={toggleCart} openSidebar={openSidebar} />
				<Sidebar show={showSidebar} close={closeSidebar} />
				<C {...this.props} />
			</>
		);
	}
}

NavAndCartToggler.propTypes = {
	component: PropTypes.element
};

export function withTogglerLayout(component) {
	return function render(props) {
		return <NavAndCartToggler component={component} {...props} />;
	};
}
