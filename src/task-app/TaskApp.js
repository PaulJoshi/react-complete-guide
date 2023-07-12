import { Fragment, useEffect, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';
import "./TaskApp.css"

export const url = "https://react-http-d7169-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"

function TaskApp() {
	const [tasks, setTasks] = useState([]);

	const { isLoading, error, sendRequest } = useHttp();

	useEffect(() => {
		const transformTasks = (taskObj) => {
			const loadedTasks = [];
	
			for (const taskKey in taskObj) {
				loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
			}
	
			setTasks(loadedTasks);
		}

		sendRequest({ url }, transformTasks);
	}, [sendRequest]);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
		<Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={sendRequest}
			/>
		</Fragment>
	);
}

export default TaskApp
