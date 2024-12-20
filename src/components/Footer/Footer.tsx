import "./Footer.css";

export default function Footer() {
	return (
		<div id="Footer">
			<img
				src="public/death-star-svgrepo-com.svg"
				alt="Logo"
				className="nav-logo"
			/>
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
		</div>
	);
}
