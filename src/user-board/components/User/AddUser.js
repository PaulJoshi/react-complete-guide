import { useState } from "react"
import Button from "../UI/Button"

export const INPUT_POINTS = {
	USERNAME: 'username',
	AGE: 'age'
}

const initialState = {
	[INPUT_POINTS.USERNAME]: "",
	[INPUT_POINTS.AGE]: 0
}

const AddUser = (props) => {
	const [userInput, setUserInput] = useState(initialState)

	const handleSubmit = (event) => {
		event.preventDefault()
		props.onAddUser(userInput)
		setUserInput(initialState)
	}

	const handleChange = (input, value) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: value
			}
		})
	}

	const handleFocus = (event) => event.target.select();

	return (
		<form className="border-2 shadow-md p-4 m-4" onSubmit={handleSubmit}>
			<div>
				<label htmlFor={INPUT_POINTS.USERNAME} className="font-semibold">Username</label>
				<input
					onChange={(event) => handleChange(INPUT_POINTS.USERNAME, event.target.value)}
					type="text"
					value={userInput[INPUT_POINTS.USERNAME]}
					id={INPUT_POINTS.USERNAME}
					className="w-full border p-2 my-2 shadow"
				/>
			</div>
			<div>
				<label htmlFor={INPUT_POINTS.AGE} className="font-semibold">Age</label>
				<input
					onFocus={handleFocus}
					onChange={(event) => handleChange(INPUT_POINTS.AGE, event.target.value)}
					type="number"
					value={userInput[INPUT_POINTS.AGE]}
					id={INPUT_POINTS.AGE}
					className="w-full border p-2 my-2 shadow"
				/>
			</div>
			<div>
				<Button>Add User</Button>
			</div>
		</form>
	)
}

export default AddUser
