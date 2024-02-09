import style from "./Service.module.css";

interface Props {
  title: string;
  description: string;
  img: string;
}

export default function Service({ title, description, img }: Props) {
  return (
    <>
      <div className={style["service___container"]}>
        <div className={style["service__img"]}>
          <img
            src={img}
            className={style["service__background__img"]}
            alt="Service background image"
          />
        </div>
        <div className={style["service__content"]}>
          <h2 className={style["content__title"]}>{title}</h2>
          <span className={style["content__Text"]}>{description}</span>
        </div>
      </div>
    </>
  );
}
