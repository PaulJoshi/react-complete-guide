import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expenses = (props) => {
	return (
		<Card className="expenses">
			{[0, 1, 2, 3].map(x => <ExpenseItem data={props.items[x]} />)}
		</Card>
	);
}

export default Expenses;