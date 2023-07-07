import Card from "../UI/Card"

const UsersList = (props) => {
	return (
		<div>
			{props.users.map(user => (
				<Card userData={user} />
			))}
		</div>
	)
}

export default UsersList
