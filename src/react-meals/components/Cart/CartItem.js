
const CartItem = (props) => {
	const price = `₹${props.price}`

	return (
		<li className="flex justify-between items-center py-3 border-b">
			<div>
				<h2 className="font-bold">{props.name}</h2>
				<div className="flex justify-between w-28 mt-2">
					<span className="text-rose-700 font-semibold">{price}</span>
					<span className="border-2 rounded-sm px-1 py-0.5 text-sm">x {props.amount}</span>
				</div>
			</div>
			<div>
				<button onClick={props.onRemove} className="px-3 py-1 w-10 border border-rose-700 text-rose-700 rounded-s-sm transition shadow-sm hover:shadow-md hover:shadow-rose-900/40 hover:bg-rose-700 hover:text-rose-50">-</button>
				<button onClick={props.onAdd} className="px-3 py-1 w-10 border-y border-r border-rose-700 text-rose-700 rounded-e-sm transition shadow-sm hover:shadow-md hover:shadow-rose-900/40 hover:bg-rose-700 hover:text-rose-50">+</button>
			</div>
		</li>
	)
}
export default CartItem
