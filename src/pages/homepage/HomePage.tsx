//components
import Hero from "@components/Hero/Hero";
import ServiceList from "@/components/serviceList/ServiceList";
import Banner from "@/components/banner/Banner";
//css
import style from "./homepage.module.css";

export default function HomePage() {
  return (
    <div className={style["homepage__container"]}>
      <Hero />
      <h1 className={style["serviceList__title"]}>Palvelut</h1>
      <ServiceList />
      <Banner
        title="Pyydä tarjous"
        text=" MINÄ TEEN TMI on suomalainen perheyritys. Me autamme, jotta sinä
            voit olla rennosti kotonasi."
        btnLink="ota-yhteytta"
      />
    </div>
  );
}
