import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
	const [cartContent, setCartContent] = useState([]);

	return (
		<>
			<section className="listWrapper">
				<MenuList
					cartContent={cartContent}
					setCartContent={setCartContent}
				/>
			</section>

			<ShoppingCart />
		</>
	);
}

export default App;
