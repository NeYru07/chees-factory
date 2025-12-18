"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumb.module.scss";

function humanize(segment: string) {
  // хуманайзер: заменяет дефисы на пробелы и делает первую букву заглавной
  const s = segment.replace(/[-_]/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const translations: Record<string, string> = {
  about: "О нас",
  products: "Продукция",
  catalog: "Каталог",
  reviews: "Отзывы",
  contacts: "Контакты",
  blog: "Блог",
  news: "Новости",
  services: "Услуги",
  certificate: "Сертификат",
  certificates: "Сертификаты",
  documents: "Документы",
  "our-products": "Наши продукты",
  faq: "Вопросы и ответы",
  profile: "Профиль",
  cart: "Корзина",
  checkout: "Оформление",
};

export default function Breadcrumb() {
  const pathname = usePathname() ?? "/";
  if (pathname === "/" || !pathname) return null;

  const parts = pathname.split("/").filter(Boolean);
  let acc = "";

  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Главная</Link>
        </li>
        {parts.map((part, idx) => {
          acc += "/" + part;
          const isLast = idx === parts.length - 1;
          // декодируем и нормализуем сегмент для поиска в словаре
          const raw = decodeURIComponent(part).toLowerCase();
          const label = translations[raw] ?? humanize(raw);
          return (
            <li key={acc} className={styles.item}>
              <span className={styles.sep}>-</span>
              {isLast ? (
                <span className={styles.current}>{label}</span>
              ) : (
                <Link href={acc}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
