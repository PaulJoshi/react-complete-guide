
const ExpensesFilter = (props) => {
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value)
	};

	return (
		<div>
			<div className="my-3">
				<label>Filter by year </label>
				<select className="p-2 border-2 shadow" value={props.selected} onChange={dropdownChangeHandler}>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter
