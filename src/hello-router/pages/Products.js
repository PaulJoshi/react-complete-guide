import { Link } from 'react-router-dom';

const PRODUCTS = [
	{ id: 'p1', title: 'Product 1' },
	{ id: 'p2', title: 'Product 2' },
	{ id: 'p3', title: 'Product 3' },
];

function ProductsPage() {
	return (
		<div className="text-center m-10">
			<h1 className="text-3xl font-bold m-8">The Products Page</h1>
			<ul>
				{PRODUCTS.map((prod) => (
					<li key={prod.id} className="m-12">
						<Link className="m-2 px-8 py-4 border rounded-sm shadow-sm transition hover:bg-green-50 hover:shadow-md" to={prod.id}>{prod.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProductsPage;
