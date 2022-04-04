import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import { useState } from "react";
import { Product } from "../models/ProductModel";

const Products: React.FC = (props) => {
	const [selectedProduct, setSelectedProduct] = useState<Product>();

	const handleSelection = (product: Product) => {
		setSelectedProduct(product);
	};

	const onChangeProduct = (value: string, attribute: string) => {
		switch (attribute) {
			case "product":
				setSelectedProduct((prevSelectedproduct) => {
					return { ...prevSelectedproduct!, product: value };
				});
				break;
			case "category":
				setSelectedProduct((prevSelectedproduct) => {
					return { ...prevSelectedproduct!, category: value };
				});
				break;
			case "price":
				setSelectedProduct((prevSelectedproduct) => {
					return { ...prevSelectedproduct!, price: value };
				});
				break;
			case "description":
				setSelectedProduct((prevSelectedproduct) => {
					return { ...prevSelectedproduct!, description: value };
				});
				break;
			default:
				setSelectedProduct((prevSelectedproduct) => {
					return { ...prevSelectedproduct! };
				});
		}
	};

	const sendProductHandler = () => {
		console.log(selectedProduct);
	};

	let productJsx;
	if (selectedProduct) {
		productJsx = (
			<ProductDetail
				product={selectedProduct.product}
				category={selectedProduct.category}
				price={selectedProduct.price}
				description={selectedProduct.description}
				change={onChangeProduct}
				sendProduct={sendProductHandler}
			/>
		);
	}

	return (
		<div>
			<ProductList handle={handleSelection} />
			{productJsx}
		</div>
	);
};

export default Products;
