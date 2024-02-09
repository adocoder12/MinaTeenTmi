import hero from "./hero.module.css";

//components
import Button from "@components/Button/Button";

export default function Hero() {
  return (
    <div className={hero.hero}>
      <h1>Monipuoliset Remontipalvelut Kotitalouksille Siilinjärveltä</h1>
      <span className={hero.text}>
        PIHATYÖT, SIIVOUS JA KOTIAPU VUODEN JOKAISENA PÄIVÄNÄ
      </span>
      <Button text="Tutustu meidan" btnLink="about" />
    </div>
  );
}
