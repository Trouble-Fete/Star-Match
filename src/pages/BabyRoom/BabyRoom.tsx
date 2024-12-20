import { useState } from "react";
import "./BabyRoom.css";

const BabyRoom: React.FC = () => {
	const [PhotoIndex, setIsPhoto] = useState(false);

	const handlePhoto = () => {
		setIsPhoto(true);
	};



	
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


