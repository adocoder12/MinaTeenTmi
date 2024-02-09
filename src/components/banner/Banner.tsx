import style from "./banner.module.css";
//components
import Button from "../Button/Button";

interface Props {
  title: string;
  text: string;
  btnLink?: string;
}

export default function Banner({ title, text, btnLink }: Props) {
  return (
    <>
      <div className={style["banner__container"]}>
        <div className={style["banner__content"]}>
          <h1 className={style["banner__title"]}>{title}</h1>
          <p className={style["banner__text"]}>{text}</p>
          <Button text="Varaa arviotapaaminen" btnLink={btnLink} />
        </div>
      </div>
    </>
  );
}
