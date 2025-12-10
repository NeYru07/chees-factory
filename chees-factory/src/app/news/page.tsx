"use client";
import Image from "next/image";
import styles from "./news.module.scss";
import Button from "../components/button/Button";

import Milk from "../../../public/milk.jpg"

export default function NewsPage() {
  return (
    <div>
      <div className={styles.main}>
			<h1>Новости</h1>
			<div className={styles.gridNews}>
				<div className={styles.newsCard}>
					<div className={styles.topImg}>
						<Image src={Milk} alt='Milk' width={424} height={315}/>
						<p className={styles.data}>3.03.2021</p>
					</div>
					<div className={styles.info}>
						<h3>Привоз козьего молока</h3>
						<p>Мы вынуждены отталкиваться от того, что экономическая повестка сегодняшнего дня является качественно новой ступенью кластеризации усилий. А ещё многие известные личности могут быть.</p>
						<Button>ЧИТАТЬ БОЛЬШЕ</Button>
					</div>
				</div>
				<div className={styles.newsCard}>
					<div className={styles.topImg}>
						<Image src={Milk} alt='Milk' width={424} height={315}/>
						<p className={styles.data}>3.03.2021</p>
					</div>
					<div className={styles.info}>
						<h3>Привоз козьего молока</h3>
						<p>Мы вынуждены отталкиваться от того, что экономическая повестка сегодняшнего дня является качественно новой ступенью кластеризации усилий. А ещё многие известные личности могут быть.</p>
						<Button>ЧИТАТЬ БОЛЬШЕ</Button>
					</div>
				</div>
				<div className={styles.newsCard}>
					<div className={styles.topImg}>
						<Image src={Milk} alt='Milk' width={424} height={315}/>
						<p className={styles.data}>3.03.2021</p>
					</div>
					<div className={styles.info}>
						<h3>Привоз козьего молока</h3>
						<p>Мы вынуждены отталкиваться от того, что экономическая повестка сегодняшнего дня является качественно новой ступенью кластеризации усилий. А ещё многие известные личности могут быть.</p>
						<Button>ЧИТАТЬ БОЛЬШЕ</Button>
					</div>
				</div>
				<div className={styles.newsCard}>
					<div className={styles.topImg}>
						<Image src={Milk} alt='Milk' width={424} height={315}/>
						<p className={styles.data}>3.03.2021</p>
					</div>
					<div className={styles.info}>
						<h3>Привоз козьего молока</h3>
						<p>Мы вынуждены отталкиваться от того, что экономическая повестка сегодняшнего дня является качественно новой ступенью кластеризации усилий. А ещё многие известные личности могут быть.</p>
						<Button>ЧИТАТЬ БОЛЬШЕ</Button>
					</div>
				</div>
				<div className={styles.newsCard}>
					<div className={styles.topImg}>
						<Image src={Milk} alt='Milk' width={424} height={315}/>
						<p className={styles.data}>3.03.2021</p>
					</div>
					<div className={styles.info}>
						<h3>Привоз козьего молока</h3>
						<p>Мы вынуждены отталкиваться от того, что экономическая повестка сегодняшнего дня является качественно новой ступенью кластеризации усилий. А ещё многие известные личности могут быть.</p>
						<Button>ЧИТАТЬ БОЛЬШЕ</Button>
					</div>
				</div>
				<div className={styles.newsCard}>
					<div className={styles.topImg}>
						<Image src={Milk} alt='Milk' width={424} height={315}/>
						<p className={styles.data}>3.03.2021</p>
					</div>
					<div className={styles.info}>
						<h3>Привоз козьего молока</h3>
						<p>Мы вынуждены отталкиваться от того, что экономическая повестка сегодняшнего дня является качественно новой ступенью кластеризации усилий. А ещё многие известные личности могут быть.</p>
						<Button>ЧИТАТЬ БОЛЬШЕ</Button>
					</div>
				</div>
			</div>
			<div className={styles.buttons}>
				<Button className={styles.noBgBtn}>В НАЧАЛО</Button>
				<div className={styles.btnsList}>
					<Button>НАЗАД</Button>
					<div className={styles.btnsPage}>
						<Button className={styles.active}>1</Button>
						<Button>2</Button>
					</div>
					<Button>ВПЕРЕД</Button>
				</div>
				<Button className={styles.noBgBtn}>В КОНЕЦ</Button>
			</div>
		</div>
    </div>
  );
}