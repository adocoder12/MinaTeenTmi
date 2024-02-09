import style from "./topBanner.module.css";

interface Props {
  title: string;
  text: string;
}

export default function TopBanner({ title, text }: Props) {
  return (
    <>
      <div className={style.bannerContainer}>
        <h1 className={style.bannerTitle}>{title}</h1>
        <p className={style.bannerText}>{text}</p>
      </div>
    </>
  );
}
