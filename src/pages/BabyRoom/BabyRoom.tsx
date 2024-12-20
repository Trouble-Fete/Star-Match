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
		<div>
			<h1>la BabyRoom </h1>
			<h2> Ici, la magie des futurs bébés prend vie!</h2>




{/* 
			<div className="container">
				<div className="photo-container">
					<img
						src="https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dossiers/que-sont-ils-devenus-les-acteurs-de-star-wars/natalie-portman/58558807-1-fre-FR/Natalie-Portman.jpg"
						alt="photo1"
						className="photo"
					/>

					<div className="line line-left" />
					<div className="horizontal-line horizontal-left" />
				</div>

				<div className="photo-container">
					<img
						src="https://t3.ftcdn.net/jpg/02/98/94/38/360_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg"
						alt="photo2"
						className="photo"
					/>
					<div className="line line-right" />
					<div className="horizontal-line horizontal-right" />
				</div> */}
			{/* 	<button type="button" onClick={handleMatch} className="match-button">
					Match
					</button> */}
			{/* </div> */}
		</div>
	);
};

/* 
<div className="photo-container">
					<img
						src=""
						alt="photo""
						className="photoBaby"
					/>
						</div>
 */
export default BabyRoom;


