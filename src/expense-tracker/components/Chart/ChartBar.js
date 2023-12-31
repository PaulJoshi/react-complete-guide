import "./ChartBar.css"

const ChartBar = (props) => {
	let barFillHeight = '0%';

	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
	}

	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill bg-teal-200'
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className='font-semibold text-center text-xs md:text-sm lg:text-base'>{props.label}</div>
		</div>
	);
};

export default ChartBar
