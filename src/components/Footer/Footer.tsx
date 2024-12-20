import "./Footer.css";

export default function Footer() {
	return (
		<div id="Footer">
			<svg
				className=".nav-logo"
				width="50px"
				height="50px"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
				role="img"
				aria-labelledby="svgTitleId"
			>
				<title id="svgTitleId">Représentation de l'Étoile de la Mort</title>
				<path
					fill="#dfd9dc"
					d="M256 32C135.1 32 36.06 127.9 32.12 248.7c136.18 13.8 311.58 13.8 447.78 0-.3-10.6-1.4-21.2-3.3-31.7H352v-18h32v-16h32v-16h45.6c-4.5-10.4-9.8-20.4-15.8-30H368v-18h48v-14h-18.7V89H368V73h-48V55h34.9c-30.8-15.14-64.6-23-98.9-23zm-64.3 64h.3c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-35.2 28.5-63.83 63.7-64zM32.26 266.7C37.97 386.1 136.4 480 256 480c10.6-1.4 16 0 43.8-7v-18h59c8.1-4.2 16-8.9 23.5-14H368v-16h-32v-18h85.4c8.5-9.3 16.3-19.4 23.1-30H432v-16h-80v-18h16v-16h48v-16h32v-16h28.5c1.7-9.4 2.7-18.8 3.2-28.3-136.8 13.7-310.6 13.7-447.44 0z"
				/>
			</svg>
			<section>
				<div className="footer-column">
					<h3>Company</h3>
					<ul>
						<li>About</li>
						<li>Services</li>
						<li>Partners</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="footer-column">
					<h3>Connect</h3>
					<ul>
						<li>Explore</li>
						<li>Sign Up</li>
						<li>FAQ</li>
						<li>Support</li>
					</ul>
				</div>
				<div className="footer-column">
					<h3>Resources</h3>
					<ul>
						<li>Blog</li>
						<li>FAQ</li>
						<li>Community</li>
						<li>Career</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
