import style from "./contactInfo.module.css";
import { FaRegUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  const cotactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Y-tunnus",
      text: "3272504-Y",
    },
    {
      icon: FaRegUser,
      title: "Yhteyshenkilö",
      text: "Eduardo Cipriani",
    },
  ];
  return (
    <div className={style["contactInfo__container"]}>
      {cotactInfo.map((info, index) => (
        <div className={style["contactInfo__wrapper"]} key={index}>
          <div className={style["contactIcon__wrapper"]}>
            <info.icon />
            <h2 className={style.IconTitle}>{info.title}</h2>
          </div>
          <span className={style.IconInfo}> {info.text}</span>
        </div>
      ))}
      <div className={style["contactInfo__wrapper"]}>
        <div className={style["contactIcon__wrapper"]}>
          <FaPhoneAlt />
          <h2 className={style.IconTitle}>Puhelinnumero</h2>
        </div>
        <a href="tel:+358449724870" className={style.IconInfo}>
          +358449724870
        </a>
      </div>
      <div className={style["contactInfo__wrapper"]}>
        <div className={style["contactIcon__wrapper"]}>
          <FaRegEnvelope />
          <h2 className={style.IconTitle}>Sähköpostiosoite</h2>
        </div>
        <a href="mailto:minateentmi@gmail.com" className={style.IconInfo}>
          minateentmi@gmail.com
        </a>
      </div>
    </div>
  );
}
