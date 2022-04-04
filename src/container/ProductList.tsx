import React, { useContext } from "react";
import { ProductContextType, Product } from "../models/ProductModel";
import { ProductContext } from "../store/product-context";
import { Form } from "react-bootstrap";
import styles from "./ProductList.module.css";

const ProductList: React.FC<{ handle: (product: Product) => void }> = (
	props
) => {
	const { products } = useContext(ProductContext) as ProductContextType;

	const handleProductSelection = (index: string) => {
		if (index !== "") {
			const prodSelected = products[parseInt(index)];
			props.handle(prodSelected);
		}
	};

	return (
		<div className={styles.list_container}>
			<div className={styles.selector}>
				<Form.Select
					aria-label="Default select example"
					onChange={(e) => handleProductSelection(e.target.value)}
				>
					<option value="">Select a product</option>
					{products.map((prod, index) => (
						<option key={index} value={index}>
							{prod.product}
						</option>
					))}
				</Form.Select>
			</div>
		</div>
	);
};

export default ProductList;
