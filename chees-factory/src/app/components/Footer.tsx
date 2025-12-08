"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import { usePathname } from "next/navigation";

import CheesLogo from "../../../public/cheesLogo.png";
import SvgMail from "../../../public/mail.svg";
import SvgPhone from "../../../public/phone.svg";

const Footer = () => {
	const currentPath = usePathname();

  const getNavLinkClass = (href: string) => {
    const isActive = currentPath === href;

    return isActive ? `${styles.navLink} ${styles.activeNav}` : styles.navLink;
  };
  return (
	<footer className={styles.footer}>
		<div className='logo'>
          <Image
            src={CheesLogo}
            alt="Сырный логотип"
            width={144}
            height={91}
            priority
          />
          <h1 className='LogoText'>СЫРО ВАРОЧКА</h1>
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
		  <div className={styles.contacts}>
        <Link
          href="./contacts"
          className={`${styles.navLink} ${getNavLinkClass("/contacts")}`}
        >
          Контакты
        </Link>
		<div className={styles.contactsGap}>
							<span>
							<Image src={SvgMail} alt="mail" width={18.33} height={14.59} />
							<a href="mailto:Cheese@mail.ru">Cheese@mail.ru</a>
						 </span>
						 <span>
							<Image src={SvgPhone} alt="mail" width={18.33} height={14.59} />
							<a href="tel:+7000000000">+7 000 00-00-00</a>
						 </span>
		</div>
		</div>
      </nav>
		<div className={styles.bottom}>
			<p>Все сырные права защищены.</p>
			<p>Сырная политика</p>
			<p>Создано в РостСайте</p>
		</div>
	</footer>
  );
};

export default Footer;