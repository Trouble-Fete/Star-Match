import Card from "../Card/Card";
import { useState, useEffect } from "react";
import "./listCards.css";

function ListCards({ cardList }) {
	// const cards = cardList;
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch("https://starwarsapi.remote-8.wilders.dev/api/characters/original")
			.then((res) => res.json())
			.then((data) => setCharacters(data));
	}, []);

	return (
		<div id="listCards">
			{characters.map((card) => (
				<Card
					key={card.id}
					imageUrl={card.imageUrl}
					name={card.name}
					birthYear={card.birth_year}
				/>
			))}
		</div>
	);
}

export default ListCards;
