import style from "./serviceList.module.css";
//component
import Service from "../Service/Service";

export default function ServiceList() {
  const service = [
    {
      id: 1,
      title: "Talvikunnossapito",
      description:
        "Käsilumityöt kertaluonteisesti tai koko talvikauden kestävä sopimusasiakkuus.",
      img: "https://s3-alpha-sig.figma.com/img/8a44/c9f1/9f1a86d64eea0e3bcd2450c4806c7498?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzgwpBu2tC~c3HQ63DBiEzDfWI5OddGi3OO8a3hfXmciNpcrIxZ98eZiVF~nqN8GV0HFJPc4kEkicvYnOYZIhrRVZHCFpfbHUIFd8bbLbIxW7F82He1tp9FCJOsjt6jQo0Z2Pm8sy8i~bWDQ8~5DlNhAZJAxg8Hdb2TOGs6VAHzM8x63aNdEfLnRbADx91pXoH7~kehyr0Q1~Td9IzDg7ToC9rrVjxay1dqcH2kuNMD1wtdKPi-lvwI-5q6t3-Y-SHNcI6NSZvmtAUqRNY0-A9WmR2TzfbS8iJe19tZnvyTQ41~PjRY~NPqlrgcbFs3u9bFA97fvNTRXQM2cOBvoEA__",
    },
    {
      id: 2,
      title: "Viheralueet",
      description:
        "Kaikki vihertyöt pensaista nurmikonhoitoon ja istutuksiin. Räätälöidään palvelukokonaisuus tai kertaluonteinen palvelu.",
      img: "https://s3-alpha-sig.figma.com/img/8a44/c9f1/9f1a86d64eea0e3bcd2450c4806c7498?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzgwpBu2tC~c3HQ63DBiEzDfWI5OddGi3OO8a3hfXmciNpcrIxZ98eZiVF~nqN8GV0HFJPc4kEkicvYnOYZIhrRVZHCFpfbHUIFd8bbLbIxW7F82He1tp9FCJOsjt6jQo0Z2Pm8sy8i~bWDQ8~5DlNhAZJAxg8Hdb2TOGs6VAHzM8x63aNdEfLnRbADx91pXoH7~kehyr0Q1~Td9IzDg7ToC9rrVjxay1dqcH2kuNMD1wtdKPi-lvwI-5q6t3-Y-SHNcI6NSZvmtAUqRNY0-A9WmR2TzfbS8iJe19tZnvyTQ41~PjRY~NPqlrgcbFs3u9bFA97fvNTRXQM2cOBvoEA__",
    },
    {
      id: 3,
      title: "Erilaiset asunnon remonttiprojektit",
      description:
        "Jos aiot remontoida asunnon, voit aloittaa useita erilaisia projekteja. Riippumatta siitä, aiotko tehdä peruskorjausta vai vain pintaremonttia, voit valita useista erilaisista projekteista. Olemme koonneet yhteen yleiskatsauksen asunnon useimpien huoneiden remonttiprojekteista.",
      img: "https://s3-alpha-sig.figma.com/img/8a44/c9f1/9f1a86d64eea0e3bcd2450c4806c7498?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzgwpBu2tC~c3HQ63DBiEzDfWI5OddGi3OO8a3hfXmciNpcrIxZ98eZiVF~nqN8GV0HFJPc4kEkicvYnOYZIhrRVZHCFpfbHUIFd8bbLbIxW7F82He1tp9FCJOsjt6jQo0Z2Pm8sy8i~bWDQ8~5DlNhAZJAxg8Hdb2TOGs6VAHzM8x63aNdEfLnRbADx91pXoH7~kehyr0Q1~Td9IzDg7ToC9rrVjxay1dqcH2kuNMD1wtdKPi-lvwI-5q6t3-Y-SHNcI6NSZvmtAUqRNY0-A9WmR2TzfbS8iJe19tZnvyTQ41~PjRY~NPqlrgcbFs3u9bFA97fvNTRXQM2cOBvoEA__",
    },
    {
      id: 4,
      title: "Siivous",
      description:
        "Olemme erikoistuneet muuttosiivoukseen. Siivoamme muuttokohteen ennen muuttoa ja teemme loppusiivouksen edelliseen asuntoon. Pyydä tarjous!.",
      img: "https://s3-alpha-sig.figma.com/img/8a44/c9f1/9f1a86d64eea0e3bcd2450c4806c7498?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzgwpBu2tC~c3HQ63DBiEzDfWI5OddGi3OO8a3hfXmciNpcrIxZ98eZiVF~nqN8GV0HFJPc4kEkicvYnOYZIhrRVZHCFpfbHUIFd8bbLbIxW7F82He1tp9FCJOsjt6jQo0Z2Pm8sy8i~bWDQ8~5DlNhAZJAxg8Hdb2TOGs6VAHzM8x63aNdEfLnRbADx91pXoH7~kehyr0Q1~Td9IzDg7ToC9rrVjxay1dqcH2kuNMD1wtdKPi-lvwI-5q6t3-Y-SHNcI6NSZvmtAUqRNY0-A9WmR2TzfbS8iJe19tZnvyTQ41~PjRY~NPqlrgcbFs3u9bFA97fvNTRXQM2cOBvoEA__",
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
            key={service.id}
          />
        ))}
      </section>
    </>
  );
}
