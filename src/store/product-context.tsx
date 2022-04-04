import React, { useEffect, useState, useCallback } from "react";
import { Product, ProductContextType } from "../models/ProductModel";

export const ProductContext = React.createContext<ProductContextType | null>(
	null
);

const ProductProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [prodSelected, setProdSelected] = useState<Product>({
		product: "",
		category: "",
		price: "",
		description: "",
	});

	const fetchProducts = useCallback(async () => {
		try {
			const response = await (
				await fetch("http://localhost:4001/productdata")
			).json();

			const respArray = response.map((product: any) => {
				return {
					product: product.name,
					category: product.category,
					price: product.price,
					description: product.description,
				};
			});

			const notEmpty = respArray.filter(
				(product: Product) => product?.product !== undefined
			);

			const limitProducts = notEmpty.slice(0, 15);

			setProducts(limitProducts);
		} catch (err: any) {
			console.log(err.message);
		}
	}, []);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	// const listItems = () => {
	// 	return products;
	// };

	const selectProduct = (productSelected: Product) => {
		setProdSelected(productSelected);
		console.log(productSelected);
	};

	return (
		<ProductContext.Provider
			value={{ products, prodSelected, selectProduct }}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
