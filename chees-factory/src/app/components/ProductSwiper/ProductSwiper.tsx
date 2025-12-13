"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import CheesSliderCard from "../CheesSliderCard/CheesSliderCard";
import ProductImage from "../../../../public/cheesWithMold.jpg";
import styles from "./ProductSwiper.module.scss";

import "swiper/css";
// import 'swiper/css/autoplay';

interface ProductSwiperProps {
  products: any[];
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ products }) => {
  const productData = {
    imageSrc: ProductImage,
    altText: "Сыр с плесенью",
    name: "Сыр с плесенью",
    price: "120 р",
    rating: 4,
    description: ["Коровье молоко 3,5%", "Закваска", "Тмин"],
  };

  return (
    <div className={styles.swiperWrapper}>
      <div className={`${styles.blurOverlay} ${styles.blurLeft}`}></div>
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={true}
        // 5. Настройка AutoPlay
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        //   spaceBetween={24}
        //   slidesPerView={5.5}
        breakpoints={{
          768: { slidesPerView: 3, spaceBetween: 8 },
          1024: { slidesPerView: 4, spaceBetween: 12 },
          1440: { slidesPerView: 5, spaceBetween: 18 },
          1920: { slidesPerView: 5.5, spaceBetween: 24 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <CheesSliderCard
              imageSrc={productData.imageSrc}
              altText={productData.altText}
              name={productData.name}
              price={productData.price}
              rating={productData.rating}
              description={productData.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.blurOverlay} ${styles.blurRight}`}></div>
    </div>
  );
};

export default ProductSwiper;
