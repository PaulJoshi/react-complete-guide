import { Suspense } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import Landing from "./Landing";
import PageNotFound from './404Page';

import ExpenseTracker from "./expense-tracker/ExpenseTracker";
import ReactConcepts from "./react-concepts/ReactConcepts";
import CourseGoals from "./course-goals/CourseGoals";
import InvestmentCalculator from "./investment-calculator/InvestmentCalculator";
import UserBoard from "./user-board/UserBoard";
import DummyLoginIndex from "./dummy-login/DummyLoginIndex";
import ReactMeals from "./react-meals/ReactMeals";
import MovieStore from "./movie-store/MovieStore";
import TaskApp from "./task-app/TaskApp";
import ReactForm from "./react-form/ReactForm";
import ReduxCounterIndex from "./redux-counter/ReduxCounterIndex";
import ReduxCartIndex from "./redux-cart/ReduxCartIndex";

import HelloRouter from "./hello-router/HelloRouter"
import HelloRouterHomePage from "./hello-router/pages/Home"
import ErrorPage from "./hello-router/pages/Error";
import ProductsPage from "./hello-router/pages/Products";
import ProductDetailPage from "./hello-router/pages/ProductDetail";

import ReactBlog from "./react-blog/ReactBlog";
import HomePage from "./react-blog/pages/Home";
import BlogPage from "./react-blog/pages/Blog";
import PostPage from "./react-blog/pages/Post";

import ReactAnimation from "./react-animation/ReactAnimation";

import FavProducts from "./fav-products/FavProducts";
import FavouritesPage from "./fav-products/containers/Favourites";
import Products from "./fav-products/containers/Products";

export const projects = [
	{
		path: "expense-tracker",
		name: "💰 Expense Tracker",
		element: <ExpenseTracker />
	},
	{
		path: "react-concepts",
		name: "💡 React Concepts",
		element: <ReactConcepts />
	},
	{
		path: "course-goals",
		name: "⚽ Course Goals",
		element: <CourseGoals />
	},
	{
		path: "investment-calculator",
		name: "💸 Investment Calculator",
		element: <InvestmentCalculator />
	},
	{
		path: "user-board",
		name: "👤 User Board",
		element: <UserBoard />
	},
	{
		path: "dummy-login",
		name: "🗝️ Dummy Login",
		element: <DummyLoginIndex />
	},
	{
		path: "react-meals",
		name: "🍕 React Meals",
		element: <ReactMeals />
	},
	{
		path: "movie-store",
		name: "📽️ Movie Store",
		element: <MovieStore />
	},
	{
		path: "task-app",
		name: "✔️ Task App",
		element: <TaskApp />
	},
	{
		path: "react-form",
		name: "📃 React Form",
		element: <ReactForm />
	},
	{
		path: "redux-counter",
		name: "🔢 Redux Counter",
		element: <ReduxCounterIndex />,
		topics: ["Redux"]
	},
	{
		path: "redux-cart",
		name: "🛒 Redux Cart",
		element: <ReduxCartIndex />
	},
	{
		path: "hello-router",
		name: "⤴️ Hello Router",
		element: <HelloRouter />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HelloRouterHomePage /> },
			{ path: 'products', element: <ProductsPage /> },
			{ path: 'products/:productId', element: <ProductDetailPage /> }
		],
	},
	{
		path: "react-blog",
		name: "📑 React Blog",
		element: <ReactBlog />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'posts',
				children: [
					{
						index: true,
						element: <Suspense fallback={<p>Loading...</p>}><BlogPage /></Suspense>,
						loader: () => import("./react-blog/pages/Blog").then(module => module.loader())
					},
					{
						path: ':id',
						element: <Suspense fallback={<p>Loading...</p>}><PostPage /></Suspense>,
						loader: (meta) => import("./react-blog/pages/Post").then(module => module.loader(meta))
					},
				],
			},
		],
	},
	{
		path: "react-animation",
		name: "💫 React Animation",
		element: <ReactAnimation />
	},
	{
		path: "fav-products",
		name: "💘 Fav Products",
		element: <FavProducts />,
		children: [
			{
				index: true,
				element: <Products />
			},
			{
				path: 'favourites',
				element: <FavouritesPage />
			}
		]
	}
]

const router = createHashRouter([
	{
		path: "/",
		errorElement: <PageNotFound />,
		children:[ 
			{
				index: true,
				element: <Landing />
			}, ...projects
		]
	}
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App;
