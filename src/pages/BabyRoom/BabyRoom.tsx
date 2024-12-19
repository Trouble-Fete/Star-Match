import { useState } from "react";
import "./BabyRoom.css";

const BabyRoom: React.FC = () => {
	const [MatchedIndex, setIsMatched] = useState(false);

	const handleMatch = () => {
		setIsMatched(true);
	};
	return (
		<div>
			<h1>la BabyRoom, </h1>
			<h2> Ici, la magie des futurs bébés prend vie!</h2>

			<div className="BabyRoom-container">
				<div className="Matched">
					<img
						src="https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dossiers/que-sont-ils-devenus-les-acteurs-de-star-wars/natalie-portman/58558807-1-fre-FR/Natalie-Portman.jpg"
						alt="Matched 1"
						className="Matched-card"
					/>
					<img
						src="https://t3.ftcdn.net/jpg/02/98/94/38/360_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg"
						alt="Matched 2"
						className="Matched-card"
					/>
				</div>

				<div className="button-container">
					<button type="button" onClick={handleMatch} className="match-button">
						NPortman!
					</button>
					<button type="button" onClick={handleMatch} className="match-button">
						MAN!
					</button>
				</div>

				<div className="baby-photo-container">
					<img
						src="https://preview.redd.it/star-wars-except-everyone-is-a-baby-v0-oymmc4s45v3a1.png?width=1024&format=png&auto=webp&s=4e0fa062d1e318c8df043aa1e9ec37865a39822c"
						alt="Matched baby "
						className="baby-photo"
					/>
				</div>
			</div>
		</div>
	);
};

export default BabyRoom;
