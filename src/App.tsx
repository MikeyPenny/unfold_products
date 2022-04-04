import React from "react";
import ProductProvider from "./store/product-context";
import Products from "./container/Products";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";

function App() {
	return (
		<ProductProvider>
			<HomePage>
				<Switch>
					<Route path="/" component={Products} />
				</Switch>
			</HomePage>
		</ProductProvider>
	);
}

export default App;
