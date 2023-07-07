import Button from "./Button"

const ErrorModal = (props) => {

	const handleClick = () => {
		props.setModalState()
	}

	return (
		<div className="flex justify-center items-center">
			<div className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50 backdrop-blur-xl" />
			<div className="flex absolute justify-center items-center top-0 left-0 w-screen h-screen z-40">
				<div className="w-5/6 max-w-lg shadow-md bg-white">
					<div className="flex justify-between bg-violet-700 text-violet-50 px-6 py-4">
						<h3>Invalid input</h3>
						<button className="hover:bg-transparent" onClick={handleClick}>❌</button>
					</div>
					<div className="p-6">
						<p className="text-violet-950">Please enter a valid name and age (non-empty values).</p>
						<Button onClick={handleClick}>Okay</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ErrorModal
