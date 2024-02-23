import style from "./serviceList.module.css";
//component
import Service from "../Service/Service";
import serviceList from "../../utils/service";

export default function ServiceList() {
  return (
    <>
      <section className={style["serviceList__container"]}>
        {serviceList.map((service) => (
          <Service
            title={service.title}
            description={service.description}
            img={service.img}
            id={service.id}
            key={service.id}
          />
        ))}
      </section>
    </>
  );
}
