import snow_work from "@assets/servicesImg/Snow_work.jpg";
import garden_work from "@assets/servicesImg/garden-work.jpeg";
import moving_work from "@assets/servicesImg/moving-service.jpg";
import Remontti_work from "@assets/servicesImg/working-by-the-renovation.jpg";

const service = [
  {
    id: 1,
    title: "Erilaiset asunnon remonttiprojektit",
    description:
      "Jos aiot remontoida asunnon, voit aloittaa useita erilaisia projekteja. Riippumatta siitä, aiotko tehdä peruskorjausta vai vain pintaremonttia, voit valita useista erilaisista projekteista. Olemme koonneet yhteen yleiskatsauksen asunnon useimpien huoneiden remonttiprojekteista.",
    img: Remontti_work,
  },
  {
    id: 2,
    title: "Siivous",
    description:
      "Olemme erikoistuneet muuttosiivoukseen. Siivoamme muuttokohteen ennen muuttoa ja teemme loppusiivouksen edelliseen asuntoon. Pyydä tarjous!.",
    img: moving_work,
    content:
      "Teemme myös koti ja rappusiivouksia asiakkaan toiveiden mukaan. Käytämme kohteissa sopimuksen mukaan, joko asiakkaan välineitä tai tuomme omat.",
    price: `Edullisempi tuntiveloitus 39,00€/h Säännölliselle siivoukselle kotisiivoukselle. Minimiveloitus on 2 tuntia, jonka jälkeen 30 min jaksoissa.`,
  },
  {
    id: 3,
    title: "Viheralueet",
    description:
      "Kaikki vihertyöt pensaista nurmikonhoitoon ja istutuksiin. Räätälöidään palvelukokonaisuus tai kertaluonteinen palvelu.",
    img: garden_work,
  },
  {
    id: 4,
    title: "Talvikunnossapito",
    description:
      "Käsilumityöt kertaluonteisesti tai koko talvikauden kestävä sopimusasiakkuus.",
    img: snow_work,
    content: `Avustamme kiinteistösi käsilumitöissä tarvitsemallasi laajuudella, joko kertakäynteinä tai koko talvikauden kattavalla sopimuksella. Koko talvikauden sopimukselle edullisempi tuntiveloitus 45€/h. `,
    price: " Käsilumityöt minimiveloitus on 25.00€ / 30 min",
  },
];

export default service;
