import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListCards from "../../components/listCards/ListCards";
import "./BabyRoom.css";

interface Character {
	imageUrl: string;
	name: string;
	birth_year: number;
	id: number;
}

function useQuery() {
	return new URLSearchParams(useLocation().search);
}
export default function BabyRoom() {
	const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
	const query = useQuery();
	const ids = query.get("ids")?.split(",") || [];

	useEffect(() => {
		if (ids.length > 0) {
			const fetchData = async () => {
				try {
					const characters = await Promise.all(
						ids.map((id) =>
							fetch(
								`https://starwarsapi.remote-8.wilders.dev/api/characters/original/${id}`,
							).then((res) => res.json()),
						),
					);
					setSelectedCharacters(characters);
				} catch (error) {
					console.error("Erreur lors de la récupération des données:", error);
				}
			};
			fetchData();
		}
	}, [ids]);

	return (
		<div id="BabyRoom">
			<ListCards
				cardList={selectedCharacters}
				isSelectable={false}
				onCardSelection={() => {}}
			/>
		</div>
	);
}
