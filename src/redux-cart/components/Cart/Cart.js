import { useSelector, useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartActions } from '../../store/cart-slice';

const Cart = (props) => {
	const cartItems = useSelector(state => state.cart.items)
	const dispatch = useDispatch()

	const handleClearCart = () => {
		dispatch(cartActions.clearCart())
	}

	const actionsUi = (
		<div>
			<button onClick={handleClearCart} className="button">Clear Cart</button>
			<button className="button">Order</button>
		</div>
	)

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItems.map(item => (
					<CartItem
						key={item.id}
						item={{
							id: item.id,
							title: item.name,
							quantity: item.quantity,
							total: item.totalPrice,
							price: item.price
						}}
					/>
				))}
			</ul>
			{cartItems.length > 0 && actionsUi}
		</Card>
	);
};

export default Cart;
