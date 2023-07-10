import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className="h-72 lg:h-64 overflow-y-scroll no-scrollbar">
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className="flex justify-between pt-4 my-4 text-xl font-bold border-t-2">
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className="flex justify-end mb-2">
				<button onClick={props.onClose} className="px-4 py-2 border rounded-sm border-rose-700 text-rose-700 transition shadow-sm hover:shadow-md hover:shadow-rose-900/40 hover:bg-rose-700 hover:text-rose-50">Close</button>
				{hasItems && <button className="px-4 py-2 ml-4 text-rose-50 rounded-sm bg-rose-700 transition shadow-sm hover:shadow-md hover:shadow-rose-900/40">Order</button>}
			</div>
		</Modal>
	)
};

export default Cart;