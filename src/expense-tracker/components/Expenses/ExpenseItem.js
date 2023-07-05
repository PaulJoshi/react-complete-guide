import ExpenseDate from './ExpenseDate';
import Card from '../Card';

const ExpenseItem = (props) => {
	return (
		<li>
			<Card className="flex justify-between my-6 p-6 border-2">
				<ExpenseDate date={props.date} />
				<div className="flex flex-col justify-evenly w-40 pl-6 border-l-2">
					<h2 className="text-xl font-semibold">{props.title}</h2>
					<div>₹{props.amount}</div>
				</div>
			</Card>
		</li>
	)
}

export default ExpenseItem
