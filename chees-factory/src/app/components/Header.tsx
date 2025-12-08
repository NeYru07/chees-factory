"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss"; //Style

// Images
import CheesLogo from "../../../public/cheesLogo.png";
import SvgMail from "../../../public/mail.svg";
import SvgPhone from "../../../public/phone.svg";

// components
import Button from "./button/Button";

const Header = () => {
  const currentPath = usePathname();

  const getNavLinkClass = (href: string) => {
    const isActive = currentPath === href;

    return isActive ? `${styles.navLink} ${styles.activeNav}` : styles.navLink;
  };
  return (
    <header className={styles.header}>
      <div className={styles.mainHead}>
        <div className={`${styles.logo} ${styles.item}`}>
          <Image
            src={CheesLogo}
            alt="Сырный логотип"
            width={144}
            height={91}
            priority
          />
          <h1 className={styles.LogoText}>СЫРО ВАРОЧКА</h1>
        </div>
        <h3 className={`${styles.item} ${styles.h3}`}>
          Любим сыр так же, <br /> как их потребителей
        </h3>
        <div className={`${styles.contacts} ${styles.item}`}>
          <span>
            <Image src={SvgMail} alt="mail" width={18.33} height={14.59} />
            <a href="mailto:Cheese@mail.ru">Cheese@mail.ru</a>
          </span>
          <span>
            <Image src={SvgPhone} alt="mail" width={18.33} height={14.59} />
            <a href="tel:+7000000000">+7 000 00-00-00</a>
          </span>
        </div>
        <Button className={`${styles.item}`}>ЗАКАЗАТЬ ЗВОНОК</Button>
      </div>
      <nav>
        <Link
          href="../"
          className={`${styles.navLink} ${getNavLinkClass("/")}`}
        >
          Главная
        </Link>
        <Link
          href="./catalog"
          className={`${styles.navLink} ${getNavLinkClass("/catalog")}`}
        >
          Каталог
        </Link>
        <Link
          href="./news"
          className={`${styles.navLink} ${getNavLinkClass("/news")}`}
        >
          Новости
        </Link>
        <Link
          href="./reviews"
          className={`${styles.navLink} ${getNavLinkClass("/reviews")}`}
        >
          Отзывы
        </Link>
        <Link
          href="./contacts"
          className={`${styles.navLink} ${getNavLinkClass("/contacts")}`}
        >
          Контакты
        </Link>
      </nav>
    </header>
  );
};

export default Header;
