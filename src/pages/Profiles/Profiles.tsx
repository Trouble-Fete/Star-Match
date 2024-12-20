import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListCards from "../../components/listCards/ListCards";
import "./Profiles.css";

export default function Profiles() {
	const [characters, setCharacters] = useState([]);
	const [selectedIds, setSelectedIds] = useState<number[]>([]); // État pour suivre les identifiants sélectionnés
	const navigate = useNavigate();

	useEffect(() => {
		fetch("https://starwarsapi.remote-8.wilders.dev/api/characters/original")
			.then((res) => res.json())
			.then((data) => setCharacters(data));
	}, []);

	// Gestion des sélections de cartes
	const handleCardSelection = (isSelected: boolean, cardId: number) => {
		setSelectedIds((prevIds) =>
			isSelected ? [...prevIds, cardId] : prevIds.filter((id) => id !== cardId),
		);
	};

	// Redirection après sélection de 2 cartes
	useEffect(() => {
		if (selectedIds.length === 2) {
			const timer = setTimeout(() => {
				navigate(`/babyroom?ids=${selectedIds.join(",")}`);
			}, 2000);

			return () => clearTimeout(timer); // Nettoie le timer lorsque le composant se démonte ou que les IDs changent
		}
	}, [selectedIds, navigate]);

	return (
		<div id="Profiles">
			<section className="consigne">
				<p>
					Consigne : Il faut sélectionner <span className="deux">deux</span>{" "}
					cartes.
				</p>
			</section>
			<ListCards
				cardList={characters}
				isSelectable={true}
				onCardSelection={handleCardSelection} // Transmet le callback à ListCards
			/>
		</div>
	);
}
