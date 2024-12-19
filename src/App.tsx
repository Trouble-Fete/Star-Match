import { Outlet } from "react-router";
import NavBar from "./components/navBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";

import "./App.css";

export default function App() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}
