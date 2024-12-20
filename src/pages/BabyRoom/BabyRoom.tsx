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

	const [showImage, setShowImage] = useState(false);
	const handleButtonClick = () => {
		setShowImage(!showImage);
	};

	return (
		<div id="BabyRoom">
			<h1>la BabyRoom </h1>
			<h2> Ici, la magie des futurs bébés prend vie !</h2>
			<div id="displayCards">
				<ListCards
					cardList={selectedCharacters}
					isSelectable={false}
					onCardSelection={() => {}}
				/>
			</div>

			<div className="button-container">
				<button type="button" onClick={handleButtonClick}>
					Show your Baby{" "}
				</button>
			</div>
			{showImage && (
				<div className="image-container">
					<img
						src="https://static.hitek.fr/img/up_m/1097817441/obiwan.webp"
						alt="Baby"
						className="Baby-image"
					/>
				</div>
			)}
		</div>
	);
}

/* 
<div className="photo-container">
					<img
						src=""
						alt="photo""
						className="photoBaby"
					/>
						</div>
 */
