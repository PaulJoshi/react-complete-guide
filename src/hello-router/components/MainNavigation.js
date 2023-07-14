import { NavLink } from 'react-router-dom';

function MainNavigation() {
	return (
		<header className="p-6 bg-green-600 text-xl text-green-50">
			<nav>
				<ul className="flex justify-center gap-4">
					<li>
						<NavLink
							to="/hello-router/"
							className={({ isActive }) =>
								isActive ? "text-green-200" : undefined
							}
							// style={({ isActive }) => ({
							//   textAlign: isActive ? 'center' : 'left',
							// })}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/hello-router/products"
							className={({ isActive }) =>
								isActive ? "text-green-200" : undefined
							}
						>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
