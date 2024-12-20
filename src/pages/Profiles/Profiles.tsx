import ListCards from "../../components/ListCards/ListCards";
import { useState, useEffect } from "react";
import "./Profiles.css";

export default function Profiles() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch("https://starwarsapi.remote-8.wilders.dev/api/characters/original")
			.then((res) => res.json())
			.then((data) => setCharacters(data));
	}, []);

	return (
		<div id="Profiles">
			<section className="consigne">
				<p>Consigne : Il faut sélectionner deux cartes.</p>
			</section>
			<ListCards cardList={characters} isSelectable={true} />
		</div>
	);
}
