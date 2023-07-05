import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	return (
		<div className="w-full">
			{!isEditing && (
				<button className="bg-teal-200 px-4 py-3 mb-3 w-full md:w-fit shadow-md transition hover:shadow-lg" onClick={() => setIsEditing(true)}>➕ Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={() => setIsEditing(false)}
				/>
			)}
		</div>
	);
};

export default NewExpense
