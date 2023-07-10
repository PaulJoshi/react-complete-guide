import { useRef, useState } from "react"
import Input from "../../UI/Input"

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true)
	const amountInputRef = useRef()

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value
		const enteredAmountNumber = +enteredAmount

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsValid(false)
			return
		}

		props.onAddToCart(enteredAmountNumber)
	}

	return (
		<form onSubmit={submitHandler} className="flex">
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1'
				}}
			/>
			<button className="px-4 py-2 rounded-sm shadow-sm bg-rose-700 text-rose-50 transition hover:shadow-lg">+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
		</form>
	)
}

export default MealItemForm
