import { Fragment } from 'react';
import Navigation from './components/Nav/Navigation';
import Counter from './containers/Counter';
import configureProductsStore from './hooks-store/products-store';
import configureCounterStore from './hooks-store/counter-store';
import './FavProducts.css'
import { Outlet } from 'react-router-dom';

configureProductsStore();
configureCounterStore();

const FavProducts = () => {
	return (
		<Fragment>
			<Navigation />
			<main>
				<Outlet />
				<Counter />
			</main>
		</Fragment>
	);
};

export default FavProducts;
