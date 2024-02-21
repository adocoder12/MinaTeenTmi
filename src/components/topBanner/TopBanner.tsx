import style from "./topBanner.module.css";

interface Props {
  title: string;
  text?: string;
  bgColour?: string;
  color?: string;
}

export default function TopBanner({ title, text, bgColour, color }: Props) {
  return (
    <>
      <div
        style={{ backgroundColor: bgColour, color: color }}
        className={style.bannerContainer}
      >
        <h1 className={style.bannerTitle}>{title}</h1>
        <p className={style.bannerText}>{text}</p>
      </div>
    </>
  );
}
