import React from "react";
import styles from "./HomePage.module.css";

const HomePage: React.FC = (props) => {
	return (
		<div className={styles.home_container}>
			<main>{props.children}</main>
		</div>
	);
};

export default HomePage;
