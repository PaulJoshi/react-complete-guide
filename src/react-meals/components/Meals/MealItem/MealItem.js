import { useContext } from "react"
import MealItemForm from "./MealItemForm"
import CartContext from "../../../store/cart-context"

const MealItem = (props) => {
	const cartCtx = useContext(CartContext)

	const price = `₹${props.price.toFixed(2)}`

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
		})
	}
	
	return (
		<li className="flex justify-between items-center mt-3 pb-3 border-b">
			<div>
				<h3 className="font-bold">{props.name}</h3>
				<div className="italic">{props.description}</div>
				<div className="font-semibold text-rose-700">{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	)
}

export default MealItem
