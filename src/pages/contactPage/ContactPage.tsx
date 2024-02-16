import style from "./conctactPage.module.css";
//components
import Form from "@/components/form/Form";
import ContactInfo from "@/components/contactInfo/ContactInfo";
import TopBanner from "@/components/topBanner/TopBanner";

export default function ContactPage() {
  return (
    <div className={style["contact__page__container"]}>
      <TopBanner
        title="Ota meihin yhteyttä"
        text="Voidaksemme tarjota asiakkaillemme parasta palvelua, pyydämme
          täyttämään oheisen yhteydenottolomakkeen. Vastaamme viestiisi
          mahdollisimman pian."
      />
      <div className={style["contact__page__wrapper"]}>
        <Form />
        <ContactInfo />
      </div>
    </div>
  );
}
