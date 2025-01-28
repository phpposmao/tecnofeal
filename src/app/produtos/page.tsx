import HeroSectionProdutos from "@/containers/produtos-page/hero-section-produtos";
import TitleSectionProdutos from "@/containers/produtos-page/title-section-produtos";
import SliderSectionProdutos from "@/containers/produtos-page/slider-section-produtos";
import DoubleSectionProdutos from "@/containers/produtos-page/double-section";
import SecSliderSectionProdutos from "@/containers/produtos-page/sec-slider-section-produtos";
import TerSliderSectionProdutos from "@/containers/produtos-page/ter-slider-section-produtos";
import QuaSliderSectionProdutos from "@/containers/produtos-page/qua-slider-section-produtos";
import TripleSectionProdutos from "@/containers/produtos-page/triple-section";
import EscolhaSectionProdutos from "@/containers/produtos-page/escolha-section";
import FormContato from "@/components/FormContato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Produtos() {
    return (
        <main className="bg-[#111111]">
            <Header
                bg_color="bg-[#111111]"
            />
            <HeroSectionProdutos />
            <TitleSectionProdutos />
            <SliderSectionProdutos />
            <DoubleSectionProdutos />
            <SecSliderSectionProdutos />
            <TerSliderSectionProdutos />
            <QuaSliderSectionProdutos />
            <TripleSectionProdutos />
            <EscolhaSectionProdutos />
            <FormContato />
            <Footer />
        </main>
    );
}