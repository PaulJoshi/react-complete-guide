
const ExpenseDate = (props) => {
	const day = props.date.toLocaleString("en-IN", {day: '2-digit'})
	const month = props.date.toLocaleString("en-IN", {month: 'long'})
	const year = props.date.getFullYear()

	return (
		<div className="text-center font-semibold pr-6 border-r-2 w-28">
			<div className="text-3xl">{day}</div>
			<div>{month}</div>
			<div>{year}</div>
		</div>
	)
}

export default ExpenseDate
