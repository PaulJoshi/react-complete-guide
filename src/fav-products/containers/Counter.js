import { useStore } from '../hooks-store/store';
import './Counter.css';

const Counter = props => {
	const [state, dispatch] = useStore();
	return (
		<div className="counter">
			<p>Only there to proof, that you can have multiple state slices.</p>
			<p>Counter: {state.counter}</p>
			<div className="counter_buttons">
				<button className="favButton" onClick={() => dispatch('ADD', 1)}>Add 1</button>
				<button className="favButton" onClick={() => dispatch('ADD', 5)}>Add 5</button>
				<button className="favButton" onClick={() => dispatch('SUB', 1)}>Subtract 1</button>
				<button className="favButton" onClick={() => dispatch('SUB', 5)}>Subtract 5</button>
			</div>
		</div>
	);
};

export default Counter;
