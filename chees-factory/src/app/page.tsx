import Image from "next/image";
import styles from "./page.module.scss";
import Button from "./components/button/Button";

// images
import SvgStar from "../../public/star.svg";
import Worker from "../../public/worker.png";
import Chees from "../../public/chees.png"

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.firstBlock}>
        <Image className={styles.firstChees} src={Chees} alt="Chees" width={164} height={93}/>
        <Image className={styles.secondChees} src={Chees} alt="Chees" width={164} height={93}/>
        <Image className={styles.ThirdChees} src={Chees} alt="Chees" width={495} height={282}/>
      </div>
      <h1 className={styles.h1}>Преимущества сыра</h1>
      <div className={styles.advantages}>
        <div className={styles.advBlock}>
          <div className={styles.components}>
            <Image src={SvgStar} alt="Star" width={96} height={90} />
            <div className={styles.text}>
              <h4>Не плесневеет</h4>
              <p>Мы проверяли</p>
            </div>
          </div>
        </div>
        <div className={styles.advBlock}>
          <div className={styles.components}>
            <Image src={SvgStar} alt="Star" width={96} height={90} />
            <div className={styles.text}>
              <h4>Не дорожает</h4>
              <p>Мы покупали</p>
            </div>
          </div>
        </div>
        <div className={styles.advBlock}>
          <div className={styles.components}>
            <Image src={SvgStar} alt="Star" width={96} height={90} />
            <div className={styles.text}>
              <h4>Не кричит</h4>
              <p>Мы уточним</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdBlock}>
        <Image
          className={styles.workerImg}
          src={Worker}
          alt="Worker"
          width={1090}
          height={727}
        />
        <div className={styles.content}>
          <h1>Качество проверено!</h1>
          <h2>Не верите? Запишитесь на экскурсию;)</h2>
          <div className={styles.inputsBlock}>
            <div className={styles.inputs}>
              <div className={styles.labelInput}>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" name="name" placeholder="Имя" />
              </div>
              <div className={styles.labelInput}>
                <label htmlFor="tel">Ваше телефон</label>
                <input type="tel" id="tel" name="tel" placeholder="Телефон" />
              </div>
            </div>
            <p>
              Отправляя свои данные, вы соглашаетесь с сырной политикой
              обработки данных
            </p>
          </div>
          <Button>Отправить</Button>
        </div>
      </div>

      <div className={styles.fourthBlock}>
        <h1>Обеспечь будущее, купив сыр </h1>
        <h2>Поверьте нам! Или вернем деньги</h2>
        <p>
          А ещё ключевые особенности структуры проекта набирают популярность
          среди определенных слоев населения, а значит, должны быть разоблачены.
          Предварительные выводы неутешительны: новая модель организационной
          деятельности требует от нас анализа системы обучения кадров,
          соответствующей насущным потребностям. <br />А ещё ключевые
          особенности структуры проекта набирают популярность среди определенных
          слоев населения, а значит, должны быть разоблачены. Предварительные
          выводы неутешительны: новая модель организационной деятельности
          требует от нас анализа системы обучения кадров, соответствующей
          насущным потребностям.
        </p>
      </div>

		<div className={styles.fithBlock}>
			
		</div>

		<div className={styles.sixthBlock}>
			
		</div>
    </div>
  );
}
