import style from "./contactInfo.module.css";
import { FaRegUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className={style["contactInfo__container"]}>
      <div className={style["contactInfo__wrapper"]}>
        <div className={style["contactIcon__wrapper"]}>
          <FaMapMarkerAlt />
          <h2 className={style.IconTitle}>Y-tunnus</h2>
        </div>
        <span className={style.IconInfo}> yritys365 2959203-8</span>
      </div>
      <div className={style["contactInfo__wrapper"]}>
        <div className={style["contactIcon__wrapper"]}>
          <FaPhoneAlt />
          <h2 className={style.IconTitle}>Puhelinnumero</h2>
        </div>
        <span className={style.IconInfo}> +358400555555</span>
      </div>
      <div className={style["contactInfo__wrapper"]}>
        <div className={style["contactIcon__wrapper"]}>
          <FaRegUser />
          <h2 className={style.IconTitle}>Yhteyshenkilö</h2>
        </div>
        <span className={style.IconInfo}> Eduardo Cipriani</span>
      </div>
      <div className={style["contactInfo__wrapper"]}>
        <div className={style["contactIcon__wrapper"]}>
          <FaRegEnvelope />
          <h2 className={style.IconTitle}>Sähköpostiosoite</h2>
        </div>
        <span className={style.IconInfo}> EduardoCipriani@mail.com</span>
      </div>
    </div>
  );
}
