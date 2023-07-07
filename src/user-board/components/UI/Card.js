
const Card = (props) => {
	return (
		<div className="p-4 m-4 border-2 shadow-md">
			{props.userData.username} ({props.userData.age} years old)
		</div>
	)
}

export default Card
