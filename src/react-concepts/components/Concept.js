
const Concept = (props) => {
	return (
		<li className="p-6 border-2 shadow-md rounded-lg transition hover:shadow-lg hover:-translate-y-1">
			<img className="h-52 text-center mx-auto" src={props.image} alt={props.title} />
			<h2 className="text-xl font-semibold my-4">{props.title}</h2>
			<p className="text-justify">{props.description}</p>
		</li>
	);
}

export default Concept;
