# FMC---Ecommerce-product-page

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6) to help improve my coding skills.

## My Process
### Built with

This challenge was built with:

- CSS custom properties
- Mobile-first workflow
- Tailwind CSS - For styling
- React - JS Library

### What I learnt

During this challenge, I used a function to generate random ***id*** for a static relative data and used the ***id*** in routing. This became a problem when i tried to access the data in the array using the route's ***id*** params after refreshing. It helped me finally understand the concept of getting a different instance of a function everytime **React** rerenders.

I also learnt how to create **Higher Order Components** with extra functionalities to toggle a sidebar and cart. 
Below is the code snippet.

```
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

  export function withTogglerLayout(component) {
  	return function render(props) {
  		return <NavAndCartToggler component={component} {...props} />;
  	};
  }
```

I also tried out how the **React Router** ***v6.4*** features works, especially with making fetch request on routing using the params key.

### Continued Development
I wish to continue working on making the app more performant.

### Useful Resources
- [React Router version update](https://reactrouter.com/en/main/start/overview) - This helped me configure my routes and how my data is fetched and rendered on the UI.

### Author
- Frontend Mentor - [@kodenavigator](https://www.frontendmentor.io/profile/chumex412)
- LinkedIn - [chukwuemeka Ofili](https://www.linkedin.com/in/chukwuemeka-ofili-7589a2156/)