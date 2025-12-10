"use client";
import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import styles from "./CheesSlider.module.scss"
import ProductSwiper from "../ProductSwiper/ProductSwiper";

// images

const dummyProducts = [
    { id: 1, name: "Сыр с плесенью", price: 120 },
    { id: 2, name: "Сыр Коровий", price: 150 },
    { id: 3, name: "Сыр Козий", price: 180 },
    { id: 4, name: "Сыр Чеддер", price: 135 },
    { id: 5, name: "Сыр Пармезан", price: 200 },
    { id: 6, name: "Сыр Гауда", price: 110 },
    { id: 7, name: "Сыр с плесенью", price: 120 },
    { id: 8, name: "Сыр Коровий", price: 150 },
    { id: 9, name: "Сыр Козий", price: 180 },
    { id: 10, name: "Сыр Чеддер", price: 135 },
    { id: 11, name: "Сыр Пармезан", price: 200 },
    { id: 12, name: "Сыр Гауда", price: 110 },
];

const CheesSlider = () => {
	return(
		<div className={styles.block}>
			<div className={styles.main}>
				<h1>Вам может понравиться</h1>
				<div className={styles.Slider}>
					<ProductSwiper 
						products={dummyProducts}
					/>
				</div>
			</div>
		</div>
	)
}

export default CheesSlider;