import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import ExpenseTracker from "./expense-tracker/ExpenseTracker";
import ReactConcepts from "./react-concepts/ReactConcepts";
import CourseGoals from "./course-goals/CourseGoals";
import InvestmentCalculator from "./investment-calculator/InvestmentCalculator";
import UserBoard from "./user-board/UserBoard";
import DummyLoginIndex from "./dummy-login/DummyLoginIndex";
import ReactMeals from "./react-meals/ReactMeals";
import MovieStore from "./movie-store/MovieStore";
import TaskApp from "./task-app/TaskApp";

export const projects = [
	{
		path: "expense-tracker",
		name: "💰 Expense Tracker",
		element: <ExpenseTracker />
	},
	{
		path: "react-concepts",
		name: "💡 React Concepts",
		element: <ReactConcepts />
	},
	{
		path: "course-goals",
		name: "⚽ Course Goals",
		element: <CourseGoals />
	},
	{
		path: "investment-calculator",
		name: "💸 Investment Calculator",
		element: <InvestmentCalculator />
	},
	{
		path: "user-board",
		name: "👤 User Board",
		element: <UserBoard />
	},
	{
		path: "dummy-login",
		name: "🗝️ Dummy Login",
		element: <DummyLoginIndex />
	},
	{
		path: "react-meals",
		name: "🍕 React Meals",
		element: <ReactMeals />
	},
	{
		path: "movie-store",
		name: "📽️ Movie Store",
		element: <MovieStore />
	},
	{
		path: "task-app",
		name: "✔️ Task App",
		element: <TaskApp />
	}
]

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				{projects.map(project => <Route path={project.path} element={project.element} />)}
			</Routes>
		</HashRouter>
	);
}

export default App;
