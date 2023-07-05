import { useState } from 'react';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form className="border-2 shadow-md p-4" onSubmit={submitHandler}>
			<div>
				<div className="mb-3">
					<label>Title</label>
					<input
						className="w-full border p-2 shadow-sm"
						type='text'
						value={enteredTitle}
						onChange={(e) => setEnteredTitle(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label>Amount</label>
					<input
						className="w-full border p-2 shadow-sm"
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={(e) => setEnteredAmount(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label>Date</label>
					<input
						className="w-full border p-2 shadow-sm"
						type='date'
						min='2019-01-01'
						max='2023-12-31'
						value={enteredDate}
						onChange={(e) => setEnteredDate(e.target.value)}
					/>
				</div>
			</div>
			<div className="mt-4">
				<button
					className="bg-teal-200 px-4 py-3 shadow-md transition hover:shadow-lg"
					type="button"
					onClick={props.onCancel}>
					Cancel
				</button>
				<button
					className="bg-teal-200 px-4 py-3 shadow-md transition ml-2 hover:shadow-lg"
					type='submit'>
					Add Expense
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm
