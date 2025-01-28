import Footer from "@/components/Footer";
import FormContato from "@/components/FormContato";
import HeaderSectionHome from "@/containers/home-page/header-section-home";
import HeroSectionHome from "@/containers/home-page/hero-section-home";
import ProjetosSectionHome from "@/containers/home-page/projetos-section-home";
import ServicosSectionHome from "@/containers/home-page/servicos-section-home";
import SobreSectionHome from "@/containers/home-page/sobre-section-home";

export default function Home() {
  return (
    <main>
      <HeaderSectionHome />
      <HeroSectionHome />
      <SobreSectionHome />
      <ProjetosSectionHome />
      <ServicosSectionHome />
      <FormContato />
      <Footer />
    </main>
  );
}
