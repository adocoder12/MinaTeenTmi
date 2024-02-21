import style from "./serviceList.module.css";
//component
import Service from "../Service/Service";
import img_service from "@assets/servicesImg/Service_background_img.jpeg";

export default function ServiceList() {
  const service = [
    {
      id: 1,
      title: "Talvikunnossapito",
      description:
        "Käsilumityöt kertaluonteisesti tai koko talvikauden kestävä sopimusasiakkuus.",
      img: img_service,
    },
    {
      id: 2,
      title: "Viheralueet",
      description:
        "Kaikki vihertyöt pensaista nurmikonhoitoon ja istutuksiin. Räätälöidään palvelukokonaisuus tai kertaluonteinen palvelu.",
      img: img_service,
    },
    {
      id: 3,
      title: "Erilaiset asunnon remonttiprojektit",
      description:
        "Jos aiot remontoida asunnon, voit aloittaa useita erilaisia projekteja. Riippumatta siitä, aiotko tehdä peruskorjausta vai vain pintaremonttia, voit valita useista erilaisista projekteista. Olemme koonneet yhteen yleiskatsauksen asunnon useimpien huoneiden remonttiprojekteista.",
      img: img_service,
    },
    {
      id: 4,
      title: "Siivous",
      description:
        "Olemme erikoistuneet muuttosiivoukseen. Siivoamme muuttokohteen ennen muuttoa ja teemme loppusiivouksen edelliseen asuntoon. Pyydä tarjous!.",
      img: img_service,
    },
  ];
  return (
    <>
      <section className={style["serviceList__container"]}>
        <h1 className={style["serviceList__title"]}>Palvelut</h1>
        {service.map((service) => (
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
