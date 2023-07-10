import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import ExpenseTracker from "./expense-tracker/ExpenseTracker";
import ReactConcepts from "./react-concepts/ReactConcepts";
import CourseGoals from "./course-goals/CourseGoals";
import InvestmentCalculator from "./investment-calculator/InvestmentCalculator";
import UserBoard from "./user-board/UserBoard";
import DummyLoginIndex from "./dummy-login/DummyLoginIndex";
import ReactMeals from "./react-meals/ReactMeals";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/expense-tracker" element={<ExpenseTracker />} />
				<Route path="/react-concepts" element={<ReactConcepts />} />
				<Route path="/course-goals" element={<CourseGoals />} />
				<Route path="/investment-calculator" element={<InvestmentCalculator />} />
				<Route path="/user-board" element={<UserBoard />} />
				<Route path="/dummy-login" element={<DummyLoginIndex />} />
				<Route path="/react-meals" element={<ReactMeals />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
