import Card from "../Card/Card";
import { useState } from "react";
import "./listCards.css";

interface CardProps {
	imageUrl: string;
	name: string;
	birth_year: number;
	id: number;
}

export default function ListCards({
	cardList,
	isSelectable,
}: { cardList: CardProps[]; isSelectable: boolean }) {
	const [selectedCount, setSelectedCount] = useState(0);

	const handleCardSelection = (isSelected: boolean) => {
		setSelectedCount((card) => (isSelected ? card + 1 : card - 1));
	};

	return (
		<div>
			<div>Cartes sélectionnées : {selectedCount}</div>
			<div id="listCards">
				{cardList.map((element) => (
					<Card
						isSelectable={isSelectable && selectedCount < 2} // Permet la sélection uniquement si le décompte est en dessous du maximum.
						key={element.id}
						imageUrl={element.imageUrl}
						name={element.name}
						birthYear={element.birth_year}
						onSelectionChange={handleCardSelection}
					/>
				))}
			</div>
		</div>
	);
}
