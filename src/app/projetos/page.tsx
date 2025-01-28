import Footer from "@/components/Footer";
import FormContato from "@/components/FormContato";
import Header from "@/components/Header";
import ButtonsSectionProjetos from "@/containers/projetos-page/button-section-projetos";
import ComercialSectionProjetos from "@/containers/projetos-page/comercial-section-projetos";
import HeroSectionProjetos from "@/containers/projetos-page/hero-section-projetos";
import ResidencialSectionProjetos from "@/containers/projetos-page/residencial-section-projetos";

export default function Projetos() {
    return (
        <main className="bg-[#6D6C64]">
            <Header
                bg_color="bg-[#6D6C64]"
            />
            <HeroSectionProjetos />
            <ButtonsSectionProjetos />
            <ComercialSectionProjetos />
            <ResidencialSectionProjetos />
            <FormContato/>
            <Footer/>
        </main>
    );
}