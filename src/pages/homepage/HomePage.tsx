//components
import Hero from "@components/Hero/Hero";
import ServiceList from "@/components/serviceList/ServiceList";
import Banner from "@/components/banner/Banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceList />
      <Banner
        title="Pyydä tarjous"
        text=" MINÄ TEEN TMI on suomalainen perheyritys. Me autamme, jotta sinä
            voit olla rennosti kotonasi."
        btnLink="ota-yhteytta"
      />
    </>
  );
}
