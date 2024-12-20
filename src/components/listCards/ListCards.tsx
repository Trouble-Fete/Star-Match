import Card from "../Card/Card";
import { useState } from "react";
import "./listCards.css";

interface CardProps {
	imageUrl: string;
	name: string;
	birth_year: number;
	id: number;
}
interface ListCardsProps {
	cardList: CardProps[];
	isSelectable: boolean;
	onCardSelection: (isSelected: boolean, cardId: number) => void;
}

export default function ListCards({
	cardList,
	isSelectable,
	onCardSelection,
}: ListCardsProps) {
	const [selectedCount, setSelectedCount] = useState(0);

	const [selectedIds, setSelectedIds] = useState<number[]>([]);

	const handleCardSelection = (isSelected: boolean, cardId: number) => {
		setSelectedCount((count) => (isSelected ? count + 1 : count - 1));
		setSelectedIds((prevIds) =>
			isSelected ? [...prevIds, cardId] : prevIds.filter((id) => id !== cardId),
		);
		onCardSelection(isSelected, cardId);
	};

	return (
		<div>
			<div id="listCards">
				{cardList.map((element) => (
					<Card
						isSelectable={isSelectable && selectedCount < 2}
						key={element.id}
						imageUrl={element.imageUrl}
						name={element.name}
						birthYear={element.birth_year}
						onSelectionChange={(isSelected) =>
							handleCardSelection(isSelected, element.id)
						}
					/>
				))}
			</div>
		</div>
	);
}
