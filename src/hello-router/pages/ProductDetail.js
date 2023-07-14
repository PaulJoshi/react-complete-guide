import { useParams, Link } from 'react-router-dom';

function ProductDetailPage() {
	const params = useParams();

	return (
		<div className="text-center m-10">
			<h1 className="text-3xl font-bold m-8">Product Details!</h1>
			<p className="max-w-lg my-4 mx-auto py-2 px-4 border-2">Product ID : <span className="font-bold">{params.productId}</span></p>
			<p className="pt-2">You can see the above product ID is reflected in the url parameter</p>
			<p className="pt-4"><Link className="pt-2 text-green-800 font-semibold hover:text-green-600" to=".." relative='path'>Back</Link></p>
		</div>
	);
}

export default ProductDetailPage;
