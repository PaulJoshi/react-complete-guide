
const Card = (props) => {
	const className = "shadow-md " + props.className

	return (
		<div className={className}>
			{props.children}
		</div>
	)
}

export default Card
