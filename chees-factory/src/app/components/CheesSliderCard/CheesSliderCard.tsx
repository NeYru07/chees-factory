"use client";
import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import styles from "./CheesSliderCard.module.scss"
import StarRating from "../StarRating/StarRating";

interface CardProps {
  // src изображения. Типизируем как любую строку или объект ImageModule
  imageSrc: any; 
  altText: string;
  name: string;
  price: string;
  rating: number; // 0 до 5
  description: string[];
}

const CheesSliderCard: React.FC<CardProps> = ({
	imageSrc, 
	altText, 
	name, 
	price, 
	rating, 
	description
}) => {

	const IMAGE_WIDTH = 254; 
	const IMAGE_HEIGHT = 194;

	return(
		<div className={styles.cardBody}>
			<h2>-5% ПРИ ОПЛАТЕ ОНЛАЙН</h2>
			<Image src={imageSrc} 
              alt={altText} 
              width={IMAGE_WIDTH} 
              height={IMAGE_HEIGHT}
              sizes="100vw" 
              style={{ width: '100%', height: 'auto', marginBottom: '2rem' }}/>
			<div className={styles.stars}>
				<StarRating rating={rating} />
			</div>
			<div className={styles.info}>
				<div className={styles.name}>
					<h3>Сыр с плесенью</h3>
					<p className={styles.price}>120 р</p>
				</div>
				<ul>
					<li>Коровье молоко 3,5%</li>
					<li>Закваска</li>
					<li>Тмин</li>
				</ul>
			</div>
			<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
		</div>
	)
}

export default CheesSliderCard;