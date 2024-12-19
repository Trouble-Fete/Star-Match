import Card from "../Card/Card";
import "./listCards.css";

interface cardListProps {
	cardList: {
		imageUrl: string;
		name: string;
		birthYear: number;
	};
}

function ListCards({ cardList }: cardListProps) {
	const cards = cardList;
	return (
		<div id="listCards">
			{cards.map((card: cardListProps["cardList"]) => (
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
