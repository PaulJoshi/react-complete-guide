import { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

function UserBoard() {
	const [users, setUsers] = useState([])
	const [showModal, setShowModal] = useState(false)

	const setModalState = () => {
		setShowModal((prevState) => !prevState)
	}

	const addUser = (userInput) => {
		setUsers(prevUsers => [...prevUsers, userInput])
	}

	const errorHandler = (userInput) => {
		if (userInput.username.trim().length !== 0 && userInput.age > 0 && userInput.age < 120) {
			addUser(userInput)
		} else {
			setModalState()
		}
	}

	return (
		<div className="my-4 mx-auto max-w-xl">
			<h1 className="text-3xl font-bold mx-4 my-10">👤 User Board</h1>
			<AddUser onAddUser={errorHandler}/>
			<UsersList users={users} />
			{showModal && <ErrorModal setModalState={setModalState}/>}
		</div>
	);
}

export default UserBoard
