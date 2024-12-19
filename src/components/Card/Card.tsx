import "./Card.css";
interface CardProps {
	imageUrl: string;
	name: string;
	birthYear: number;
}

function Card({ imageUrl, name, birthYear }: CardProps) {
	return (
		<div id="card">
			<div>
				<img src={imageUrl} alt={name} />
				<h3>{name}</h3>
				<h3>Age : {5 - birthYear}</h3>
			</div>
			{/* <div id="descr">
				gender taille poids species name classification average lifespan
				homeworld name climat
			</div> */}
		</div>
	);
}

export default Card;
