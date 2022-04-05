import React, { SyntheticEvent, useState } from "react";

import { Form, Button } from "react-bootstrap";
import styles from "./ProductDetail.module.css";

const ProductDetail: React.FC<{
	product: string;
	category: string;
	price: string;
	description: string;
	change: (val: string, attribute: string) => void;
	sendProduct: () => void;
}> = (props) => {
	const [selectedImage, setSelectedImage] = useState<
		Blob | MediaSource | null
	>(null);
	const [isValidForm, setIsValidForm] = useState(true);

	const onChangeProdName = (ev: SyntheticEvent) => {
		ev.preventDefault();
		const element = ev.target as HTMLInputElement;
		let valid = checkValidity(element.value);
		setIsValidForm(valid);
		props.change(element.value, "product");
	};

	const changeCategoryHandler = (ev: SyntheticEvent) => {
		ev.preventDefault();
		const element = ev.target as HTMLInputElement;
		let valid = checkValidity(element.value);
		setIsValidForm(valid);
		props.change(element.value, "category");
	};
	const changePriceHandler = (ev: SyntheticEvent) => {
		ev.preventDefault();
		const element = ev.target as HTMLInputElement;
		let valid = checkValidity(element.value);
		setIsValidForm(valid);
		props.change(element.value, "price");
	};
	const changeDescriptionHandler = (ev: SyntheticEvent) => {
		ev.preventDefault();
		const element = ev.target as HTMLInputElement;
		let valid = checkValidity(element.value);
		setIsValidForm(valid);
		props.change(element.value, "description");
	};

	const loadImage = (ev: SyntheticEvent) => {
		const element = ev.target as HTMLInputElement;

		if (element.files) {
			console.log(element.files[0]);
			setSelectedImage(element.files[0]);
		}
	};

	const handleSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();

		props.sendProduct();
	};

	const checkValidity = (value: string) => {
		let isValid = true;

		if (value === "") {
			isValid = false;
			console.log(isValid && isValidForm);
		}

		return isValid;
	};

	console.log(isValidForm);

	return (
		<Form className={styles.form_container} onSubmit={handleSubmit}>
			<div className={styles.form}>
				<div className="details">
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
					>
						<Form.Label className={styles.label}>
							Product name
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="Product name"
							value={props.product}
							onChange={onChangeProdName}
						/>
					</Form.Group>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
					>
						<Form.Label className={styles.label}>Price</Form.Label>
						<Form.Control
							type="text"
							placeholder="Price"
							value={props.price}
							onChange={changePriceHandler}
						/>
					</Form.Group>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
					>
						<Form.Label className={styles.label}>
							Category
						</Form.Label>
						<Form.Control
							type="text"
							placeholder="Category"
							value={props.category}
							onChange={changeCategoryHandler}
						/>
					</Form.Group>
				</div>
				<div className={styles.image_container}>
					{selectedImage && (
						<img
							className={styles.image_product}
							alt="not fount"
							width={"250px"}
							src={URL.createObjectURL(selectedImage!)}
						/>
					)}
					<input type="file" name="myImage" onChange={loadImage} />
				</div>
			</div>
			<div className="prod_description">
				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlInput1"
				>
					<Form.Label className={styles.label}>
						Description
					</Form.Label>
					<Form.Control
						as="textarea"
						type="text"
						placeholder="Description"
						value={props.description}
						onChange={changeDescriptionHandler}
					/>
				</Form.Group>
			</div>
			<div className={styles.btn_submit}>
				<Button disabled={!isValidForm} variant="primary" type="submit">
					Upload product
				</Button>
			</div>
		</Form>
	);
};

export default ProductDetail;
