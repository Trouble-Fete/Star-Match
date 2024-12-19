import "./Card.css";

function Card({ imageUrl, name, birthYear, species, classes, homeworld }) {
	const speciesName = species;
	const homeWorld = homeworld;
	const classesName = classes;
	return (
		<div id="card">
			<img src={imageUrl} alt={name} />
			<h3>{name}</h3>
			<h3>{birthYear}</h3>
		</div>
	);
}

export default Card;
