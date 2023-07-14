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
import ReactForm from "./react-form/ReactForm";
import ReduxCounterIndex from "./redux-counter/ReduxCounterIndex";
import ReduxCartIndex from "./redux-cart/ReduxCartIndex";
import HelloRouter from "./hello-router/HelloRouter"
import PageNotFound from './404Page';

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
	},
	{
		path: "react-form",
		name: "📃 React Form",
		element: <ReactForm />
	},
	{
		path: "redux-counter",
		name: "🔢 Redux Counter",
		element: <ReduxCounterIndex />,
		topics: ["Redux"]
	},
	{
		path: "redux-cart",
		name: "🛒 Redux Cart",
		element: <ReduxCartIndex />
	},
	{
		path: "/hello-router/*",
		name: "⤴️ Hello Router",
		element: <HelloRouter />
	}
]

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				{projects.map(project => <Route path={project.path} element={project.element} />)}
				{/* <Route path="/hello-router/*" element={<HelloRouter />} /> */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
