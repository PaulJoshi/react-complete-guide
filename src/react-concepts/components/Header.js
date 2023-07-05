import keyConceptsImage from '../assets/images/key-concepts.png';

const Header = () => {
	return (
		<header className="flex flex-col items-center m-6">
			<img className="w-40" src={keyConceptsImage} alt="Medal badge with a star" />
			<h1 className="text-2xl font-bold m-2">Key React Concepts</h1>
			<p>Selected key React concepts you should know about</p>
		</header>
	);
}

export default Header;
