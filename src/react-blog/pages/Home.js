import { Link } from "react-router-dom";

function HomePage() {
	return (
		<>
			<h1 className="text-xl font-bold">The Home Page</h1>
			<p className="my-6">Webapp built to learn deployment of create-react-app project with complex nested routing</p>
			<p className="pt-2 text-violet-800 font-semibold hover:text-violet-600 hover:underline">
				<Link to="/">Go back to All Projects</Link>.
			</p>
		</>
	);
}

export default HomePage;
