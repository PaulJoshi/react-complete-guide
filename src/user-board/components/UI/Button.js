
const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className="bg-violet-900 text-violet-100 shadow px-4 py-2 mt-4 transition hover:bg-violet-800 hover:shadow-md"
		>
			{props.children}
		</button>
	)
}

export default Button
