import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
	const navigate = useNavigate();

	function navigateHandler() {
		navigate('/hello-router/products');
	}

	return (
		<div className="text-center m-10">
			<h1 className="text-3xl font-bold m-8">My Home Page</h1>
			<p className="max-w-lg my-6 mx-auto p-4 border-2 shadow-sm">This webapp is implemented to understand routing, nested routing and dynamic routing</p>
			<p className="pt-2 text-green-800 font-semibold hover:text-green-600 hover:underline">
				<Link to="/hello-router/products">Go to the list of products</Link>.
			</p>
			<p className="pt-2 text-green-800 font-semibold hover:text-green-600 hover:underline">
				<Link to="/">Go back to All Projects</Link>.
			</p>
			<p className="pt-2 text-green-800 font-semibold hover:text-green-600">
				<button className="m-2 px-8 py-4 border rounded-sm shadow-sm transition hover:bg-green-50 hover:shadow-md" onClick={navigateHandler}>Navigate</button>
			</p>
		</div>
	);
}

export default HomePage;
