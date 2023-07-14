import {
	// createBrowserRouter,
	// createRoutesFromElements,
	// RouterProvider,
	Route, Routes
} from 'react-router-dom';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <RootLayout />,
// 		errorElement: <ErrorPage />,
// 		children: [
// 			{ index: true, element: <HomePage /> },
// 			{ path: 'products', element: <ProductsPage /> },
// 			{ path: 'products/:productId', element: <ProductDetailPage /> }
// 		],
// 	}
// ]);

// const router = createBrowserRouter(routeDefinitions);

// function HelloRouter() {
// 	return <RouterProvider router={router} />;
// }

// export default HelloRouter;

export default function HelloRouter() {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
				<Route index element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/products/:productId" element={<ProductDetailPage />} />
			</Route>
		</Routes>
	);
}
