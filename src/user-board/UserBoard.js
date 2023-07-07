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
		if (userInput.username !== "" && userInput.age !== 0) {
			setUsers(prevUsers => [...prevUsers, userInput])
		} else {
			setModalState()
		}
	}

	return (
		<div className="my-4 mx-auto max-w-xl">
			<h1 className="text-3xl font-bold mx-4 my-10">👤 User Board</h1>
			<AddUser onAddUser={addUser}/>
			<UsersList users={users} />
			{showModal && <ErrorModal setModalState={setModalState}/>}
		</div>
	);
}

export default UserBoard
