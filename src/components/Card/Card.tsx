import { useState } from "react";
import "./Card.css";

interface CardProps {
	imageUrl: string;
	name: string;
	birthYear: number;
	isSelectable?: boolean;
	onSelectionChange?: (isSelected: boolean) => void;
}

export default function Card({
	imageUrl,
	name,
	birthYear,
	isSelectable,
	onSelectionChange,
}: CardProps) {
	const [isSelected, setIsSelected] = useState(false);

	const toggleSelectCard = () => {
		if (!isSelected && !isSelectable) {
			return;
		}
		const newSelectedState = !isSelected;
		setIsSelected(newSelectedState);
		onSelectionChange?.(newSelectedState);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			toggleSelectCard();
		}
	};

	const handleClick = () => {
		toggleSelectCard();
	};

	return (
		<article
			id="card"
			className={isSelected ? "selected" : ""}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			<section className="simpleCard">
				<img className="imgCard" src={imageUrl} alt={name} />
				<section className="paraCard">
					<h3>{name}</h3>
					<h3>Age : {5 - birthYear}</h3>
				</section>
			</section>
		</article>
	);
}
