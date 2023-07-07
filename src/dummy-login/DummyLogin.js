import { useContext, Fragment } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function DummyLogin() {
	const ctx = useContext(AuthContext);

	return (
		<Fragment>
			<MainHeader />
			<main>
				{!ctx.isLoggedIn && <Login />}
				{ctx.isLoggedIn && <Home />}
			</main>
		</Fragment>
	);
}

export default DummyLogin
