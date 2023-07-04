import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import ExpenseTracker from "./expense-tracker/ExpenseTracker";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/expense-tracker" element={<ExpenseTracker />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
