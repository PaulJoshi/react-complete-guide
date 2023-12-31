import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = props => {
	return (
		<header className="main-header">
			<nav>
				<ul>
					<li>
						<NavLink
							to="" exact
						>
							All Products
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => isActive ? "active" : ""}
							to="favourites"
						>
							Favourites
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
