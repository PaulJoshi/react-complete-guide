import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		price: 169,
		title: 'Atomic Habits',
		description: 'Tiny changes, Big results'
	},
	{
		id: 'p2',
		price: 299.99,
		title: 'First Among Equals',
		description: 'Onnum parayanjilla'
	},
]

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map(product => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
