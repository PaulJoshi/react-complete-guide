import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import ExpenseTracker from "./expense-tracker/ExpenseTracker";
import ReactConcepts from "./react-concepts/ReactConcepts";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/expense-tracker" element={<ExpenseTracker />} />
				<Route path="/react-concepts" element={<ReactConcepts />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
