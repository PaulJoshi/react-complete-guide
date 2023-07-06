import { useState } from "react"

export const INPUT_POINTS = {
	CurrentSavings: "current-savings",
	YearlyContribution: "yearly-contribution",
	ExpectedReturn: "expected-return",
	Duration: "duration"
}

const initialUserInput = {
	[INPUT_POINTS.CurrentSavings]: 10000,
	[INPUT_POINTS.YearlyContribution]: 1200,
	[INPUT_POINTS.ExpectedReturn]: 7,
	[INPUT_POINTS.Duration]: 10,
}

const UserInput = (props) => {
	const [userInput, setUserInput] = useState(initialUserInput)

	const submitHandler = (event) => {
		event.preventDefault()
		props.onCalculate(userInput)
	}

	const resetHandler = () => {
		setUserInput(initialUserInput)
	}

	const inputChangehangeHandler = (input, value) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: +value,
			}
		})

	}

	return (
		<form className="form" onSubmit={submitHandler}>
			<div className="input-group">
				<p>
					<label htmlFor={INPUT_POINTS.CurrentSavings}>Current Savings ($)</label>
					<input
						onChange={(event) => inputChangehangeHandler(INPUT_POINTS.CurrentSavings, event.target.value)}
						value={userInput[INPUT_POINTS.CurrentSavings]}
						type="number"
						id={INPUT_POINTS.CurrentSavings}
					/>
				</p>
				<p>
					<label htmlFor={INPUT_POINTS.YearlyContribution}>Yearly Savings ($)</label>
					<input
						onChange={(event) => inputChangehangeHandler(INPUT_POINTS.YearlyContribution, event.target.value)}
						value={userInput[INPUT_POINTS.YearlyContribution]}
						type="number"
						id={INPUT_POINTS.YearlyContribution}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor={INPUT_POINTS.ExpectedReturn}>
						Expected Interest (%, per year)
					</label>
					<input
						onChange={(event) => inputChangehangeHandler(INPUT_POINTS.ExpectedReturn, event.target.value)}
						value={userInput[INPUT_POINTS.ExpectedReturn]}
						type="number"
						id={INPUT_POINTS.ExpectedReturn}
					/>
				</p>
				<p>
					<label htmlFor={INPUT_POINTS.Duration}>Investment Duration (years)</label>
					<input
						onChange={(event) => inputChangehangeHandler(INPUT_POINTS.Duration, event.target.value)}
						value={userInput[INPUT_POINTS.Duration]}
						type="number"
						id={INPUT_POINTS.Duration} 
					/>
				</p>
			</div>
			<p className="actions">
				<button onClick={resetHandler} type="reset" className="buttonAlt">
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	)
}

export default UserInput
