import style from "./servicePage.module.css";
//components
import ServiceList from "@components/serviceList/ServiceList";
import TopBanner from "@components/topBanner/TopBanner";

export default function ServicePage() {
  return (
    <div className={style["servicepage__container"]}>
      <TopBanner title="PALVELUT" bgColour="#32302B" color="white" />
      <ServiceList />
    </div>
  );
}
