import { useState } from "react";
import BasicForm from './components/BasicForm';
import SimpleInput from './components/SimpleInput';
import "./ReactForm.css"

function ReactForm() {
	const [showSimpleInput, setShowSimpleInput] = useState(false)

	const handleChange = () => {
		setShowSimpleInput((showSimpleInput) => !showSimpleInput)
	}

	let content;

	if (showSimpleInput) {
		content = <SimpleInput onChange={handleChange} />
	} else {
		content = <BasicForm onChange={handleChange} />
	}

	return (
		<div className="app">
			{content}
		</div>
	);
}

export default ReactForm;
