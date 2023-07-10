import { useState, useContext, useEffect } from "react"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"

const InitialBtnClasses = "flex gap-3 items-center rounded-sm px-4 lg:px-6 py-2 bg-rose-900 transition shadow-sm hover:shadow-md"

const HeaderCartButton = (props) => {
	const [btnClasses, setBtnClasses] = useState(InitialBtnClasses)
	const cartCtx = useContext(CartContext)
	const { items } = cartCtx

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0)

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnClasses(`${InitialBtnClasses} animate-bounce`)
		const timer = setTimeout(() => setBtnClasses(InitialBtnClasses), 500)

		return () => {
			clearTimeout(timer);
		}
	}, [items])

	return (
		<button onClick={props.onClick} className={btnClasses}>
			<span className="w-6"><CartIcon /></span>
			<span>Your Cart</span>
			<span className="font-bold bg-rose-700 px-2 py-1 rounded-full">{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton
