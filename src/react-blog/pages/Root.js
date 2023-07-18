import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import '../ReactBlog.css'

function RootLayout() {
	return (
		<>
			<MainNavigation />
			<main className="main">
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
