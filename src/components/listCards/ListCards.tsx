import Card from "../Card/Card";
import "./listCards.css";

interface CardProps {
	imageUrl: string;
	name: string;
	birth_year: number;
	id: number;
}

export default function ListCards({ cardList }: { cardList: CardProps[] }) {
	return (
		<div id="listCards">
			{cardList.map((element) => (
				<Card
					key={element.id}
					imageUrl={element.imageUrl}
					name={element.name}
					birthYear={element.birth_year}
				/>
			))}
		</div>
	);
}
