import { useRef, useState } from "react";

const isEmpty = value => value.trim() === "";
const isSixChars = value => value.trim().length === 6;

const Checkout = (props) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		postalCode: true,
		city: true
	})

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostalCode = postalCodeInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName)
		const enteredStreetIsValid = !isEmpty(enteredStreet)
		const enteredPostalCodeIsValid = isSixChars(enteredPostalCode)
		const enteredCityIsValid = !isEmpty(enteredCity)

		setFormInputsValidity({
			name : enteredNameIsValid,
			street : enteredStreetIsValid,
			postalCode : enteredPostalCodeIsValid,
			city : enteredCityIsValid
		})

		const formIsValid = 
			enteredNameIsValid &&
			enteredStreetIsValid &&
			enteredPostalCodeIsValid &&
			enteredCityIsValid

		if (!formIsValid) {
			return;
		}

		props.onConfirm({
			name : enteredName,
			street : enteredStreet,
			postalCode : enteredPostalCode,
			city : enteredCity
		});
	}

	return (
		<form className="max-h-72 overflow-y-scroll no-scrollbar" onSubmit={confirmHandler}>
			<div>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInputRef} className="w-full my-2 p-1 border rounded-sm" />
				{!formInputsValidity.name && <p className="mb-3 text-red-600">Please enter a valid name!</p>}
			</div>
			<div>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInputRef} className="w-full my-2 p-1 border rounded-sm" />
				{!formInputsValidity.street && <p className="mb-3 text-red-600">Please enter a valid street!</p>}
			</div>
			<div>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postalCodeInputRef} className="w-full my-2 p-1 border rounded-sm" />
				{!formInputsValidity.postalCode && <p className="mb-3 text-red-600">Please enter a valid postal ode!</p>}
			</div>
			<div>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputRef} className="w-full my-2 p-1 border rounded-sm" />
				{!formInputsValidity.city && <p className="mb-3 text-red-600">Please enter a valid city!</p>}
			</div>
			<div className="flex justify-end my-2">
				<button type="button" onClick={props.onCancel} className="px-4 py-2 border rounded-sm border-rose-700 text-rose-700 transition shadow-sm hover:shadow-md hover:shadow-rose-900/40 hover:bg-rose-700 hover:text-rose-50">Cancel</button>
				<button className="px-4 py-2 ml-2 text-rose-50 rounded-sm bg-rose-700 transition shadow-sm hover:shadow-md hover:shadow-rose-900/40">Confirm</button>
			</div>
		</form>
	)
}

export default Checkout
