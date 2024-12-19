import "./Card.css";
interface CardProps {
	imageUrl: string;
	name: string;
	birthYear: number;
}

function Card({ imageUrl, name, birthYear }: CardProps) {
	return (
		<article id="card" className="hover-bounce">
			<section className="simpleCard">
				<img className="imgCard" src={imageUrl} alt={name} />
				<section className="paraCard">
					<h3>{name}</h3>
					<h4>Age : {5 - birthYear}</h4>
				</section>
			</section>
			{/* <div id="descr">
				gender taille poids species name classification average
				homeworld
			</div> */}
		</article>
	);
}

export default Card;
