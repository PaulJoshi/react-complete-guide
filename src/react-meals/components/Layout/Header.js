import { Fragment } from "react"
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
	return (
		<Fragment>
			<header className="flex justify-between items-center px-6 lg:px-12 py-4 bg-rose-700 text-white">
				<h1 className="text-2xl lg:text-3xl font-bold">ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart}/>
			</header>
			<div>
				<img className="h-64 w-full object-cover" src={mealsImage} alt="A table full of food" />
			</div>
		</Fragment>
	)
}

export default Header
