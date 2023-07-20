import { Link } from 'react-router-dom';
import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Products = props => {
	const state = useStore()[0];
	return (
		<ul className="products-list">

			<p className="fav-description">
				This webapp was built to learn conversion of redux to React Context and then to custom hooks.
				<br />
				<Link className="underline hover:text-rose-600" to="/">Go to all Projects</Link>
			</p>

			{state.products.map(prod => (
				<ProductItem
					key={prod.id}
					id={prod.id}
					title={prod.title}
					description={prod.description}
					isFav={prod.isFavourite}
				/>
			))}

		</ul>
	);
};

export default Products;
