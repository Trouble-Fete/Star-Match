import Button from "../../components/button/button";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div id="home">
			<header className="headerHome">
				<section className="container1">
					<h1>Star Match</h1>
					<article>
						<h2>Unlock the Galaxy of Love</h2>
						<p>
							Embark on a cosmic journey to find your soulmate in the vast
							expanse of the Star Wars universe
						</p>
						<Button text="Join Now" />
					</article>
				</section>
			</header>

			<main>
				<h2>Explore Our Galactic Singles</h2>
				<section className="topPage">
					<article className="article1">
						<img
							className="firstImage"
							src="/src/assets/vue_de_profil.jpg"
							alt="homme"
						/>
						<section className="section1">
							<h3>Meet Your Cosmic</h3>
							<h4 className="grey">
								Uncover the secrets of the Force and find your perfect
							</h4>
							<h4 className="pink">Discover Your Destiny</h4>
							<p>
								Venture into the unknown and connect with like-minded
								individuals who share your passion for the galaxy far, far away.
								Whether you're a Jedi, a Sith, or simply a galactic wanderer,
								Galaxy Love offers a safe and exciting platform to explore the
								possibilities of love among the stars.
							</p>
						</section>
					</article>
					<article className="article2">
						<img
							className="secondImage"
							src="/src/assets/femme_profile.png"
							alt="femme"
						/>
						<section className="section2">
							<h3>Ignite the Spark of </h3>
							<h4 className="grey">Navigate the Cosmic Landscape of Love</h4>
							<h4 className="pink">Embrace the Power of the Force</h4>
							<p>
								Forge Unbreakable Bonds: At Galaxy Love, we believe that true
								love transcends the boundaries of the physical world. Our
								advanced algorithms and intuitive matching system will help you
								discover your soulmate, no matter how far they may be across the
								galaxy.
							</p>
						</section>
					</article>
					<Link to={"/profiles"}>
						<Button text="View Profiles" />
					</Link>
				</section>

				<h2>Discover Your Intestellar Destiny</h2>
				<section className="midPage">
					<article className="container3">
						<img className="imageMid" src="/src/assets/r2d2.jpg" alt="femme" />
						<div className="box3">
							<h3>Ignite the Spark of</h3>
							<p>Uncover the Mysteries of the Force and Let Love Bloom</p>
							<div className="petit">
								<img
									className="mariage"
									src="/src/assets/mariageDessin.png"
									alt="mariage"
								/>
								<p>
									Navigating the Cosmic Landscape of Love: Galaxy Love is your
									gateway to discovering your soulmate in the expansive Star
									Wars universe
								</p>
							</div>
							<p>Forge Unbreakable Bonds Across the Galaxy</p>

							<div className="doubleBouton">
								<Button text="Connect Now" />
								<Button text="Join the Adventure" />
							</div>
						</div>
					</article>
				</section>
				<section className="bottomPage">
					<div className="firstBrick">
						<img src="/src/assets/embrace.png" alt="" />
						<h5>Embrace the Cosmic</h5>
						<p>
							Unlock the Secrets of the Force and Find Your Galactic Soulmate.
							At Galaxy Love
						</p>
					</div>
					<div className="secondBrick">
						<img src="/src/assets/ignite-removebg-preview.png" alt="" />
						<h5>Ignite the Spark of</h5>
						<p>
							Venture Into the Unknown and Discover Your Cosmic Companion.
							Galaxy Love offers a safe, inclusive
						</p>
					</div>
					<div className="thirdBrick">
						<img src="/src/assets/planete.png" alt="logo" />
						<h5>IForge Unbreakable</h5>
						<p>
							Harness the Power of the Force to Uncover Your Soulmate. Galaxy
							Love is the premier dating platform for Star Wars fans
						</p>
					</div>
				</section>
				<img
					className="footer"
					src="/src/assets/galaxie_etoile.jpg"
					alt="galaxie"
				/>
			</main>
		</div>
	);
}

export default Home;
