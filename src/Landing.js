import { Link } from "react-router-dom"

const Landing = () => {
	return (
		<main className="m-12">
			<h1 className="pb-4 my-6 text-2xl font-bold border-b-2 border-teal-100">React: The Complete Guide Coursework</h1>
			<p>Projects and course work I have completed as part of the "React: The Complete Guide" course on Udemy by Maximilian Schwarzmüller. View the source code on <a className="text-teal-500 transition hover:text-teal-600" target="_blank" rel="noreferrer" href="https://github.com/PaulJoshi/react-complete-guide">Github ↗</a></p>
			<ul className="flex flex-wrap gap-5 my-8">
				<Link className="bg-teal-100 py-4 px-6 text-center rounded-full cursor-pointer transition hover:bg-teal-200 hover:shadow-sm" to="expense-tracker">💰 Expense Tracker</Link>
				<Link className="bg-teal-100 py-4 px-6 text-center rounded-full cursor-pointer transition hover:bg-teal-200 hover:shadow-sm" to="react-concepts">💡 React Concepts</Link>
				<Link className="bg-teal-100 py-4 px-6 text-center rounded-full cursor-pointer transition hover:bg-teal-200 hover:shadow-sm" to="course-goals">⚽ Course Goals</Link>
			</ul>
			<p>View the Course on <a className="text-teal-500 transition hover:text-teal-600" target="_blank" rel="noreferrer" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Udemy ↗</a></p>
			<div className="py-4 mt-6 border-t-2 border-teal-100">
				<span>Find me at <a className="text-teal-500 transition hover:text-teal-600" href="https://www.pauljoshi.com/">pauljoshi.com</a></span>
			</div>
		</main>
	)
}

export default Landing
