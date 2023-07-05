import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {
	return (
		<Card className="flex justify-between my-6 p-6 border-2">
			<ExpenseDate date={props.data.date} />
			<div className="flex flex-col justify-evenly w-40 pl-6 border-l-2">
				<h2 className="text-xl font-semibold">{props.data.title}</h2>
				<div className="">${props.data.amount}</div>
			</div>
		</Card>
	)
}

export default ExpenseItem
