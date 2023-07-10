
const Card = (props) => {
	return (
		<div className="max-w-2xl mx-auto my-6 md:my-8 lg:my-10 p-4 pb-6 rounded-sm">
			{props.children}
		</div>
	)
}

export default Card
