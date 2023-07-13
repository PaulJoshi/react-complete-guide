import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth'
import Counter from './components/Counter';
import UserProfile from './components/UserProfile'
import "./ReduxCounter.css"

function ReduxCounter() {
	const isAuth = useSelector(state => state.auth.isAuthenticated)

	return (
		<Fragment>
			<Header />
			<div className="m-4">
				{!isAuth && <Auth />}
				{isAuth && <UserProfile />}
				<Counter />
			</div>
		</Fragment>
	);
}

export default ReduxCounter;
