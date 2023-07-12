import { Fragment, useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import { url } from '../Meals/AvailableMeals';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [didSubmit, setDidSubmit] = useState(false)
	const cartCtx = useContext(CartContext);

	const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsCheckout(true)
	}

	const submitOrderHandler = (userData) => {
		setIsSubmitting(true)
		fetch(`${url}/orders.json`, {
			method: 'POST',
			body: JSON.stringify({
				user: userData,
				orderedItems: cartCtx.items
			})
		}).then(() => {
			setIsSubmitting(false);
			setDidSubmit(true);
			cartCtx.clearCart();
		})
	}

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

	const modalActions = (
		<div className="flex justify-end mb-2">
			<button onClick={props.onClose} className="px-4 py-2 border rounded-sm border-rose-700 text-rose-700 transition shadow-sm hover:shadow-md hover:shadow-rose-900/40 hover:bg-rose-700 hover:text-rose-50">Close</button>
			{hasItems && <button onClick={orderHandler} className="px-4 py-2 ml-2 text-rose-50 rounded-sm bg-rose-700 transition shadow-sm hover:shadow-md hover:shadow-rose-900/40">Order</button>}
		</div>
	)

	const cartModalContent = (
		<Fragment>
			{cartItems}
			<div className="flex justify-between py-4 my-4 text-xl font-bold border-y-2">
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
			{!isCheckout && modalActions}
		</Fragment>
	)

	const isSubmittingModalContent = <p className="text-center p-4">Sending data...</p>

	const didSubmitModalContent = (
		<Fragment>
			<p className="text-center p-4">Order successfully placed</p>
			<div className="flex justify-center">
				<button onClick={props.onClose} className="px-4 py-2 mt-2 mb-4 border rounded-sm border-rose-700 text-rose-700 transition shadow-sm hover:shadow-md hover:shadow-rose-900/40 hover:bg-rose-700 hover:text-rose-50">Close</button>
			</div>
		</Fragment>
	)

	return (
		<Modal onClose={props.onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	)
};

export default Cart;