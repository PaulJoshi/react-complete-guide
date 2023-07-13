import classes from './Header.module.css';
import { authActions } from '../store/auth';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
	const isAuth = useSelector(state => state.auth.isAuthenticated)
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(authActions.logout())
	}

	const navContent = (
		<nav>
			<ul>
				<li>
					<a href='/'>My Products</a>
				</li>
				<li>
					<a href='/'>My Sales</a>
				</li>
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{isAuth && navContent}
		</header>
	);
};

export default Header;
