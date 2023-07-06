import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput, { INPUT_POINTS } from "./components/UserInput/UserInput";
import "./InvestmentCalculator.css"

function InvestmentCalculator() {
	const [userInput, setUserInput] = useState(null)

	const calculateHandler = (userInput) => {
		setUserInput(userInput)
	};

	const yearlyData = []; // per-year results

	if (userInput) {
		let currentSavings = +userInput[INPUT_POINTS.CurrentSavings];
		const yearlyContribution = +userInput[INPUT_POINTS.YearlyContribution];
		const expectedReturn = +userInput[INPUT_POINTS.ExpectedReturn] / 100;
		const duration = +userInput[INPUT_POINTS.Duration];

		// Calculate yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}
	}

	return (
		<div>
			<Header />
			<UserInput onCalculate={calculateHandler}/>
			{!userInput && <p className="text-center">No investment calculated yet</p>}
			{userInput && <ResultsTable data={yearlyData} initialInvestment={userInput[INPUT_POINTS.CurrentSavings]} />}
		</div>
	);
}

export default InvestmentCalculator;
