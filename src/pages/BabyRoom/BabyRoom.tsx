import { useState } from "react";
import "./BabyRoom.css";

const BabyRoom: React.FC = () => {
	const [isMatched, setIsMatched] = useState(false);

	const handleMatch = () => {
		setIsMatched(true);
	};
	return (
		<div>
			<h1>Bienvenue dans la BabyRoom!</h1>
			<div className="BabyRoom-container">
				<div className="Matched">
					<img
						src="https://3dgraphiste.fr/wp-content/uploads/2015/07/personnage-3d-robot-starwars.jpg"
						alt="Matched 1"
						className="Matched-card"
					/>
					<img
						src="https://3dgraphiste.fr/wp-content/uploads/2015/07/personnage-3d-robot-starwars.jpg"
						alt="Matched 2"
						className="Matched-card"
					/>
				</div>
				<div className="button-container">
					<button type="button" onClick={handleMatch} className="match-button">
						Match!
					</button>
				</div>
				<div className="baby-photo-container">
					<img
						src="https://t3.ftcdn.net/jpg/02/98/94/38/360_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg"
						alt="Matched baby "
						className="baby-photo"
					/>
				</div>
			</div>
		</div>
	);
};

export default BabyRoom;
