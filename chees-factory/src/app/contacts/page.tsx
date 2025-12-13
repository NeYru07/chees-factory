"use client";
import Image from "next/image";
import styles from "./contacts.module.scss";

// Images
import MiniMap from "../../../public/miniMap.jpg";
import Marker from "../../../public/marker.svg";
import Phone from "../../../public/phoneYellow.svg";
import Map from "../../../public/map.jpg";

export default function ContactsPage() {
  return (
    <div>
      <div className={styles.mainBlock}>
        <div className={styles.miniMapBlock}>
          <h1>Контакты</h1>
          <Image src={MiniMap} alt="MiniMap" width={546} height={455} />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.addressesBlock}>
            <h4>Адрес завода</h4>
            <div className={styles.adressPhones}>
              <div className={styles.address}>
                <Image src={Marker} alt="Marker" width={16} height={22} />
                <b>
                  623786, Свердловская область, г. Артёмовский, ул. Разведчиков,
                  д. 11
                </b>
              </div>
              <div className={styles.phonesBlock}>
                <div className={styles.phone}>
                  <Image src={Phone} alt="Phone" width={22} height={22} />
                  <b>(34363) 2-53-29</b>
                </div>
                <div className={styles.phone}>
                  <Image src={Phone} alt="Phone" width={22} height={22} />
                  <b>(343)220-39-33</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.BankBlock}>
            <h4>Банковские реквизиты</h4>
            <p>
              ООО «Артёмовский завод трубопроводных соединений» <br /> ИНН/КПП
              <b>6602012540/660201001</b>, <br /> ОГРН <b>1096602000219</b>{" "}
              <br /> р/с <b>40702810516000045174</b> <br />в ОПЕРУ Уральского
              банка Сбербанка России
            </p>
          </div>
        </div>
      </div>
		<Image className={styles.MapImg} src={Map} alt='Map' width={1940} height={462}/>
    </div>
  );
}
