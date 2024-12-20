import "./NavBar.css";
// J'aime ce projet !!!

export default function NavBar() {
	return (
<nav id="navBar">
    <img src="public/death-star-svgrepo-com.svg" alt="Logo" className="nav-logo" /> 
    <ul className="nav-list">
      <li>Accueil</li>
      <li>Matches</li>
      <li>A propos </li>
      <li>Contacts</li>
    </ul>
</nav>
	);
}
