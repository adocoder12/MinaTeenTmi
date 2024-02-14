import style from "./aboutPage.module.css";
//components
import Banner from "@/components/banner/Banner";
import AboutInfo from "@/components/aboutComponent/AboutInfo";

export default function AboutPage() {
  return (
    <>
      <div className={style["about___page__container"]}>
        <h1 className={style["about___page__title"]}>About</h1>
        <AboutInfo />
        <Banner
          title="Pyydä tarjous"
          text=" MINÄ TEEN TMI on suomalainen perheyritys. Me autamme, jotta sinä
            voit olla rennosti kotonasi."
          btnLink="ota-yhteytta"
        />
      </div>
    </>
  );
}
