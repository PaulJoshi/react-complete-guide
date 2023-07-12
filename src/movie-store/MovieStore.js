import { Fragment, useEffect, useState, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import './MovieStore.css';
import AddMovie from './components/AddMovie';
import Loader from './components/Loader';

function MovieStore() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null);

	// Conventional Fetch

	// const fetchMoviesHandler = () => {
	// 	setMovies([])
	// 	setIsLoading(true)
	// 	fetch('https://swapi.dev/api/films')
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			const transformedMovies = data.results.map((movieData) => {
	// 				return {
	// 					id: movieData.episode_id,
	// 					title: movieData.title,
	// 					releaseDate: movieData.release_date,
	// 					openingText: movieData.opening_crawl
	// 				}
	// 			})
	// 		setMovies(transformedMovies)
	// 		setIsLoading(false)
	// 		})
	// }

	const url = "https://react-http-d7169-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true)

		try {
			const response = await fetch(url)

			if (!response.ok) {
				throw new Error('Something went wrong!')
			}

			const data = await response.json();

			const transformedMovies = Object.keys(data).map((key) => {
				return {
					id: key,
					title: data[key].title,
					releaseDate: data[key].releaseDate,
					openingText: data[key].openingText
				}
			})

			setMovies(transformedMovies)
		} catch (error) {
			setError(error.message)
		}
		setIsLoading(false)
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler])

	const addMovieHandler = async (movie) => {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(movie),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data)
	}

	let content = <p>No movies found</p>

	if (isLoading) {
		content = <Loader />
	}

	if (error) {
		content = <p>{error}</p>
	}

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />
	}

	return (
		<Fragment>
			<header className="section">
				<h1 className="title">Movie Store</h1>
				<p className="subtitle">This webapp can read and write movies to a Firebase realtime database</p>
			</header>
			<section className="section">
				<AddMovie onAddMovie={addMovieHandler} />
			</section>

			<section className="section">
				<button onClick={fetchMoviesHandler} className="button">Fetch Movies</button>
			</section>

			<section className="section">
				{content}
			</section>

		</Fragment>
	);
}

export default MovieStore;
