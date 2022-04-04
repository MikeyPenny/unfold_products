export type Product = {
	product: string;
	category: string;
	price: string;
	description: string;
};

export type ProductContextType = {
	products: Product[];
	prodSelected: Product;
	selectProduct: (p: Product) => void;
};
