import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

export const url = "https://react-http-d7169-default-rtdb.asia-southeast1.firebasedatabase.app"

const AvailableMeals = () => {
	const [mealsData, setMealsData] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState()

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(`${url}/meals.json`)

			if (!response.ok) {
				throw new Error("Something went wrong")
			}

			const data = await response.json()
			setMealsData(data)
			setIsLoading(false)
		}

		fetchMeals().catch((error) => {
			setIsLoading(false)
			setError(error.message)
		})
	}, [])

	const mealsList = Object.keys(mealsData).map((meal) => {
		return (
			<MealItem
				id={meal}
				key={meal}
				name={mealsData[meal].name}
				description={mealsData[meal].description}
				price={mealsData[meal].price}
			/>
		)
	})

	let content;

	if (isLoading) {
		content = <p className="text-center">Loading...</p>
	} else if (error) {
		content = <p className="text-center text-red-600">{error}</p>
	} else {
		content = <ul>{mealsList}</ul>
	}

	return (
		<section>
			<Card>
				{content}
			</Card>
		</section>
	)
}

export default AvailableMeals
