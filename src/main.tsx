import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./pages/Home/Home.tsx";
import Profiles from "./pages/Profiles/Profiles.tsx";
import BabyRoom from "./pages/BabyRoom/BabyRoom.tsx";
// import BabyRoom from "./pages/BabyRoom/BabyRoom.tsx";
// import Profiles from "./pages/Profiles/Profiles.tsx";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/profiles",
				element: <Profiles />,
			},
			{
				path: "/babyroom",
				element: <BabyRoom />,
			},
		],
	},
]);

if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
