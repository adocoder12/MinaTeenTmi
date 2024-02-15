import style from "./aboutInfo.module.css";

//img
import profile from "../../assets/Profile_Picture.jpeg";
export default function AboutInfo() {
  return (
    <>
      <div className={style["about___info__wrapper"]}>
        <div className={style["about__img__wrapper"]}>
          <img
            className={style["about__img__profile"]}
            src={profile}
            alt="Background image"
          />
        </div>
        <div className={style["about___page__text"]}>
          <h1 className={style.secondaryTitle}>
            Hello <span className={style.spanDecorator}>there!</span>
          </h1>
          <p className={style.paragrhap}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium minus, at labore enim libero, quas iusto eius tempora et
            totam aperiam repellendus voluptates vel ex. Sapiente molestias
            eligendi sunt, quia enim vitae adipisci architecto quam dolor, fuga
            aliquid at et recusandae, eaque unde omnis ex aspernatur eos dolore
            iure similique.
          </p>
        </div>
      </div>
    </>
  );
}
