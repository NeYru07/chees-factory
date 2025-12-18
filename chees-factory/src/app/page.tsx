"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Button from "./components/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

// images
import SvgStar from "../../public/star.svg";
import Worker from "../../public/worker.png";
import Chees from "../../public/chees.png";
import Document1 from "../../public/document1.jpg";
import Document2 from "../../public/document2.jpg";
import ArrowBtn from "../../public/arrowBtn.svg";
import LinkArrow from "../../public/linkArrow.svg";
import StarTrue from "../../public/StarTrue.svg";
import StarFalse from "../../public/StarFalse.svg";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import IMask from "imask";

export default function Home() {
  // refs и состояние ошибок + статус полей (valid / invalid)
  const nameRef = useRef<HTMLInputElement | null>(null);
  const telRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [fieldStatus, setFieldStatus] = useState<{
    name?: "valid" | "invalid";
    phone?: "valid" | "invalid";
  }>({});

  // zod схема
  const contactSchema = z.object({
    name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
    phone: z
      .string()
      .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Неверный формат телефона"),
  });

  // IMask init
  useEffect(() => {
    let maskInstance: any;
    if (telRef.current) {
      maskInstance = IMask(telRef.current, {
        mask: "+{7} (000) 000-00-00",
      });
    }
    return () => {
      if (maskInstance) maskInstance.destroy();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value ?? "";
    const phone = telRef.current?.value ?? "";
    const result = contactSchema.safeParse({ name, phone });
    if (!result.success) {
      const issues = result.error.format();
      const nameErr = issues.name?._errors?.[0] as string | undefined;
      const phoneErr = issues.phone?._errors?.[0] as string | undefined;
      setErrors({ name: nameErr, phone: phoneErr });
      setFieldStatus({
        name: nameErr ? "invalid" : "valid",
        phone: phoneErr ? "invalid" : "valid",
      });
      return;
    }
    setErrors({});
    setFieldStatus({ name: "valid", phone: "valid" });
    // TODO: отправка данных на сервер
    console.log("Форма валидна:", { name, phone });
  };

  return (
    <div className={styles.page}>
      <div className={styles.firstBlock}>
        <Image
          className={styles.firstChees}
          src={Chees}
          alt="Chees"
          width={164}
          height={93}
        />
        <Image
          className={styles.secondChees}
          src={Chees}
          alt="Chees"
          width={164}
          height={93}
        />
        <Image
          className={styles.ThirdChees}
          src={Chees}
          alt="Chees"
          width={495}
          height={282}
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideContent}>
                <h1>Наш сыр лучше всех!</h1>
                <h2>Не верите? Проверьте сами!</h2>
                <Button>В каталог</Button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideContent}>
                <h1>Экскурсии на сырзавод</h1>
                <h2>Запишитесь и увидьте всё своими глазами</h2>
                <Button>Записаться</Button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideContent}>
                <h1>Лучшие сыры региона</h1>
                <h2>Гарантия вкуса и качества</h2>
                <Button>Подробнее</Button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideContent}>
                <h1>Скидки и акции</h1>
                <h2>Не пропустите выгодные предложения</h2>
                <Button>В каталог</Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className={styles.h1}>Преимущества сыра</h1>
      <div className={styles.advantages}>
        <div className={styles.advBlock}>
          <div className={styles.components}>
            <Image className={styles.bigStar} src={SvgStar} alt="Star" width={96} height={90} />
            <div className={styles.text}>
              <h4>Не плесневеет</h4>
              <p>Мы проверяли</p>
            </div>
          </div>
        </div>
        <div className={styles.advBlock}>
          <div className={styles.components}>
            <Image className={styles.bigStar} src={SvgStar} alt="Star" width={96} height={90} />
            <div className={styles.text}>
              <h4>Не дорожает</h4>
              <p>Мы покупали</p>
            </div>
          </div>
        </div>
        <div className={styles.advBlock}>
          <div className={styles.components}>
            <Image className={styles.bigStar} src={SvgStar} alt="Star" width={96} height={90} />
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
          {/* форма с маской и валидацией */}
          <form
            className={styles.inputsBlock}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.inputs}>
              <div
                className={`${styles.labelInput} ${
                  fieldStatus.name === "invalid"
                    ? styles.invalid
                    : fieldStatus.name === "valid"
                    ? styles.valid
                    : ""
                }`}
              >
                <label htmlFor="name">Ваше имя</label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name}</span>
                )}
              </div>

              <div
                className={`${styles.labelInput} ${
                  fieldStatus.phone === "invalid"
                    ? styles.invalid
                    : fieldStatus.phone === "valid"
                    ? styles.valid
                    : ""
                }`}
              >
                <label htmlFor="tel">Ваше телефон</label>
                <input
                  ref={telRef}
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Телефон"
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone}</span>
                )}
              </div>
            </div>
            <p>
              Отправляя свои данные, вы соглашаетесь с сырной политикой
              обработки данных
            </p>
            <Button>Отправить</Button>
          </form>
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
        <div className={styles.content}>
          <h1>Наши сертификаты</h1>
          <div className={styles.documents}>
            <Image src={Document1} alt="Document1" width={312} height={442} />
            <div className={styles.sliderDocument}>
              <Button>
                <Image
                  src={ArrowBtn}
                  alt="Arrow"
                  width={23}
                  height={17}
                  style={{ transform: "rotate(180deg)" }}
                />
              </Button>
              <Image className={styles.BigDoc} src={Document2} alt="Document2" width={425} height={602} />
              <Button>
                <Image src={ArrowBtn} alt="Arrow" width={23} height={17} />
              </Button>
            </div>
            <Image src={Document1} alt="Document1" width={312} height={442} />
          </div>
        </div>
      </div>

      <div className={styles.sixthBlock}>
        <div className={styles.content}>
          <div className={styles.textTop}>
            <h1>Отзывы о нашей работе</h1>
            <span>
              <Link href="/reviews">Читать все отзывы</Link>
              <Image src={LinkArrow} alt="linkArrow" width={11} height={13} />
            </span>
          </div>
          <div className={styles.reviewsSlider}>
            <Button>
              <Image
                src={ArrowBtn}
                alt="Arrow"
                width={23}
                height={17}
                style={{ transform: "rotate(180deg)", filter: "invert(100%)" }}
              />
            </Button>
            <div className={styles.reviews}>
              <div className={styles.reviewBlock}>
                <div className={styles.top}>
                  <h3>Александр Походов</h3>
                  <div className={styles.stars}>
                    <Image
                      src={StarTrue}
                      alt="StarTrue"
                      width={17}
                      height={14}
                    />
                    <Image
                      src={StarTrue}
                      alt="StarTrue"
                      width={17}
                      height={14}
                    />
                    <Image
                      src={StarTrue}
                      alt="StarTrue"
                      width={17}
                      height={14}
                    />
                    <Image
                      src={StarFalse}
                      alt="StarFalse"
                      width={17}
                      height={14}
                    />
                    <Image
                      src={StarFalse}
                      alt="StarFalse"
                      width={17}
                      height={14}
                    />
                  </div>
                </div>
                <p className={styles.date}>12 февраля 2020</p>
                <p className={styles.reviewText}>
                  Приятно, граждане, наблюдать, как некоторые особенности
                  внутренней политики освещают чрезвычайно интересные
                  особенности картины в целом, однако конкретные выводы,
                  разумеется, в равной степени предоставлены сами себе.
                  Банальные, но неопровержимые выводы, а также сделанные на базе
                  интернет-аналитики выводы лишь добавляют фракционных
                  разногласий и объявлены нарушающими общечеловеческие нормы
                  этики и морали.
                </p>
              </div>
              <div className={styles.reviewBlock}>
                <div className={styles.top}>
                  <h3>Александр Походов</h3>
                  <div className={styles.stars}>
                    <Image
                      src={StarTrue}
                      alt="StarTrue"
                      width={17}
                      height={14}
                    />
                    <Image
                      src={StarTrue}
                      alt="StarTrue"
                      width={17}
                      height={14}
                    />
                    <Image
                      src={StarTrue}
                      alt="StarTrue"
                      width={17}
                      height={14}
                    />
                    <Image
                      src={StarFalse}
                      alt="StarFalse"
                      width={17}
                      height={14}
                    />
                    <Image
                      src={StarFalse}
                      alt="StarFalse"
                      width={17}
                      height={14}
                    />
                  </div>
                </div>
                <p className={styles.date}>12 февраля 2020</p>
                <p className={styles.reviewText}>
                  Приятно, граждане, наблюдать, как некоторые особенности
                  внутренней политики освещают чрезвычайно интересные
                  особенности картины в целом, однако конкретные выводы,
                  разумеется, в равной степени предоставлены сами себе.
                  Банальные, но неопровержимые выводы, а также сделанные на базе
                  интернет-аналитики выводы лишь добавляют фракционных
                  разногласий и объявлены нарушающими общечеловеческие нормы
                  этики и морали.
                </p>
              </div>
            </div>
            <Button>
              <Image
                src={ArrowBtn}
                alt="Arrow"
                width={23}
                height={17}
                style={{ filter: "invert(100%)" }}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
