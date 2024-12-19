import ListCards from "../../components/listCards/ListCards";
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
			<ListCards cardList={characters} />
		</div>
	);
}
