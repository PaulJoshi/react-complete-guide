import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
  return (
	<div>
		<label htmlFor={props.input.id}>{props.label}</label>
		<input ref={ref} className="border mx-2 p-2 rounded-sm" {...props.input}/>
	</div>
  )
});

export default Input
