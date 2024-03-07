import { useParams } from "react-router-dom";
//componet
import TopBanner from "../topBanner/TopBanner";
//css
import style from "./serviceModal.module.css";

//list
import serviceList from "@utils/service";

export default function ServiceModal() {
  const { id } = useParams();
  return (
    <>
      {serviceList
        .filter((service) => service.id === Number(id))
        .map((service) => (
          <div key={service.id} className={style["service__modal___container"]}>
            <TopBanner
              title={service.title}
              color="#333"
              img={service.img}
              heigth="100%"
            />
            <div
              key={service.id}
              className={style["service__content___container"]}
            >
              <h2 className={style.title}>{service.title}</h2>
              <p className={style.description}>{service.description}</p>
              <p className={style.content}> {service.content}</p>
              <p className={style.price}>{service.price}</p>
            </div>
          </div>
        ))}
    </>
  );
}
