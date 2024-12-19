import "./listCards.css";

function ListCards({ cardList }) {
	const cards = cardList;
	return (
		<div id="listCards">
			{cards.map((card) => (
				<Card
					key={card.id}
					imageUrl={card.imageUrl}
					name={card.name}
					gender={card.gender}
					birthYear={card.birth_year}
					species={card.species.name}
					classes={card.species.classification}
					homeworld={card.homeworld.name}
				/>
			))}
		</div>
	);
}

export default ListCards;
