"use client";
import Image from "next/image";
import styles from "./reviews.module.scss";
import Button from "../components/button/Button";

// images
import StarTrue from "../../../public/StarTrue.svg";
import StarFalse from "../../../public/StarFalse.svg";

export default function ReviewsPage() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.topText}>
          <h1>Отзывы о нашей работе</h1>
          <Button>НАПИСАТЬ ОТЗЫВ</Button>
        </div>
        <div className={styles.mid}>
          <div className={styles.reviewBlock}>
            <div className={styles.top}>
              <h3>Александр Походов</h3>
              <div className={styles.stars}>
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarFalse} alt="StarFalse" width={17} height={14} />
                <Image src={StarFalse} alt="StarFalse" width={17} height={14} />
              </div>
            </div>
            <p className={styles.date}>12 февраля 2020</p>
            <p className={styles.reviewText}>
              Приятно, граждане, наблюдать, как некоторые особенности внутренней
              политики освещают чрезвычайно интересные особенности картины в
              целом, однако конкретные выводы, разумеется, в равной степени
              предоставлены сами себе. Банальные, но неопровержимые выводы, а
              также сделанные на базе интернет-аналитики выводы лишь добавляют
              фракционных разногласий и объявлены нарушающими общечеловеческие
              нормы этики и морали.
            </p>
          </div>
          <div className={styles.reviewBlock}>
            <div className={styles.top}>
              <h3>Александр Походов</h3>
              <div className={styles.stars}>
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarFalse} alt="StarFalse" width={17} height={14} />
                <Image src={StarFalse} alt="StarFalse" width={17} height={14} />
              </div>
            </div>
            <p className={styles.date}>12 февраля 2020</p>
            <p className={styles.reviewText}>
              Приятно, граждане, наблюдать, как некоторые особенности внутренней
              политики освещают чрезвычайно интересные особенности картины в
              целом, однако конкретные выводы, разумеется, в равной степени
              предоставлены сами себе. Банальные, но неопровержимые выводы, а
              также сделанные на базе интернет-аналитики выводы лишь добавляют
              фракционных разногласий и объявлены нарушающими общечеловеческие
              нормы этики и морали.
            </p>
          </div>
          <div className={styles.reviewBlock}>
            <div className={styles.top}>
              <h3>Александр Походов</h3>
              <div className={styles.stars}>
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarFalse} alt="StarFalse" width={17} height={14} />
                <Image src={StarFalse} alt="StarFalse" width={17} height={14} />
              </div>
            </div>
            <p className={styles.date}>12 февраля 2020</p>
            <p className={styles.reviewText}>
              Приятно, граждане, наблюдать, как некоторые особенности внутренней
              политики освещают чрезвычайно интересные особенности картины в
              целом, однако конкретные выводы, разумеется, в равной степени
              предоставлены сами себе. Банальные, но неопровержимые выводы, а
              также сделанные на базе интернет-аналитики выводы лишь добавляют
              фракционных разногласий и объявлены нарушающими общечеловеческие
              нормы этики и морали.
            </p>
          </div>
          <div className={styles.reviewBlock}>
            <div className={styles.top}>
              <h3>Александр Походов</h3>
              <div className={styles.stars}>
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarTrue} alt="StarTrue" width={17} height={14} />
                <Image src={StarFalse} alt="StarFalse" width={17} height={14} />
                <Image src={StarFalse} alt="StarFalse" width={17} height={14} />
              </div>
            </div>
            <p className={styles.date}>12 февраля 2020</p>
            <p className={styles.reviewText}>
              Приятно, граждане, наблюдать, как некоторые особенности внутренней
              политики освещают чрезвычайно интересные особенности картины в
              целом, однако конкретные выводы, разумеется, в равной степени
              предоставлены сами себе. Банальные, но неопровержимые выводы, а
              также сделанные на базе интернет-аналитики выводы лишь добавляют
              фракционных разногласий и объявлены нарушающими общечеловеческие
              нормы этики и морали.
            </p>
          </div>
        </div>
        <Button className={styles.bottomBtn}>ПОКАЗАТЬ БОЛЬШЕ</Button>
      </div>
    </div>
  );
}
