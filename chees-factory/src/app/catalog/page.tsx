"use client";
import React from "react";
import Image from "next/image";
import CheesSlider from "../components/CheesSlider/CheesSlider";
import styles from "./catalog.module.scss"

// images
import Gouda from "../../../public/Gouda.jpg"
import Adyghe from "../../../public/Adyghe.jpg"
import Camambert from "../../../public/Camambert.jpg"
import Cows from "../../../public/Gouda.jpg"
import Mold from "../../../public/cheesWithMold.jpg"
import Blue from "../../../public/BlueChees.jpg"

export default function CatalogPage() {
  return (
    <div>
		<div className={styles.catalog}>
			<h1>Каталог</h1>
			<div className={styles.catalogCards}>
				<div className={styles.card}>
					<Image src={Gouda} alt='CheesGouda' width={290} height={222}/>
					<h2>Сыр Гауда</h2>
				</div>
				<div className={styles.card}>
					<Image src={Adyghe} alt='CheesAdyghe' width={290} height={222}/>
					<h2>Сыр Адыгейский </h2>
				</div>
				<div className={styles.card}>
					<Image src={Camambert} alt='CheesCamambert' width={290} height={222}/>
					<h2>Сыр Камамбер</h2>
				</div>
				<div className={styles.card}>
					<Image src={Cows} alt='CheesCows' width={290} height={222}/>
					<h2>Сыр Коровий</h2>
				</div>
				<div className={styles.card}>
					<Image src={Mold} alt='CheesWithMold' width={290} height={222}/>
					<h2>Сыр с плесенью</h2>
				</div>
				<div className={styles.card}>
					<Image src={Blue} alt='CheesBlue' width={290} height={222}/>
					<h2>Сыр Блю</h2>
				</div>
			</div>
		</div>
      <CheesSlider/>
    </div>
  );
}