import Footer from "@/components/Footer";
import FormContato from "@/components/FormContato";
import HeaderSectionContato from "@/containers/contato-page/header-section-contato";
import HeroSectionContato from "@/containers/contato-page/hero-section-contato";
import TitleSectionContato from "@/containers/contato-page/title-section-contato";

export default function Contato() {
    return (
        <main className="bg-white">
            <HeaderSectionContato />
            <HeroSectionContato />
            <TitleSectionContato />
            <FormContato />
            <Footer />
        </main>
    );
}