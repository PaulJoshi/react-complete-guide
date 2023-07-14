import { Link } from "react-router-dom"
import { projects } from "./App"

const screenshotUrl = "https://screenia.best/api/screenshot?url=https%3A%2F%2Fpauljoshi.github.io%2Freact-complete-guide%2F%23%2F"

const Landing = () => {

	const projectsGrid = (
		projects.map(project => 
			<li key={project.path}>
				<Link
					to={project.path.replace('*', '')}
				>
					<div className="flex flex-col items-center border border-teal-100 shadow rounded-sm bg-teal-100 transition hover:shadow-lg hover:bg-teal-200 hover:border-teal-200">
						<img className="h-48 w-full object-cover bg-teal-50" src={`${screenshotUrl}${project.path}&type=png`} alt="project-thumbnail"/>
						<p className="p-4 md:text-lg text-teal-950 font-semibold">{project.name}</p>
					</div>
				</Link>
			</li>
		)
	)

	return (
		<main className="m-10 md:m-12">
			<h1 className="pb-4 my-6 text-2xl font-bold border-b-2 border-teal-100">React: The Complete Guide Coursework</h1>
			<p>Projects and course work I have completed as part of the "React: The Complete Guide" course on Udemy by Maximilian Schwarzmüller. View the source code on <a className="text-teal-500 transition hover:text-teal-600" target="_blank" rel="noreferrer" href="https://github.com/PaulJoshi/react-complete-guide">Github ↗</a></p>
			<ul className="grid grid-cols-1 gap-5 my-8 md:grid-cols-2 md:gap-10 md:my-10 lg:grid-cols-3 xl:grid-cols-4">
				{projectsGrid}
			</ul>
			<p>View the Course on <a className="text-teal-500 transition hover:text-teal-600" target="_blank" rel="noreferrer" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Udemy ↗</a></p>
			<div className="py-4 mt-6 border-t-2 border-teal-100">
				<span>Find me at <a className="text-teal-500 transition hover:text-teal-600" href="https://www.pauljoshi.com/">pauljoshi.com</a></span>
			</div>
		</main>
	)
}

export default Landing
