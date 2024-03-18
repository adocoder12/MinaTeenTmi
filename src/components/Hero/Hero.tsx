import hero from "./hero.module.css";

//components
import Button from "@components/Button/Button";

export default function Hero() {
  return (
    <>
      <section className={hero.hero}>
        <h1 className={hero.title}>
          Monipuoliset Remonttipalvelut Kotitalouksille Siilinjärveltä
        </h1>
        <span className={hero.text}>
          PIHATYÖT, SIIVOUS JA KOTIAPU VUODEN JOKAISENA PÄIVÄNÄ
        </span>
        <Button text="Tutustu meihin" btnLink="minusta" />
      </section>
    </>
  );
}
