import Footer from "@/components/Footer";
import FormContato from "@/components/FormContato";
import Header from "@/components/Header";
import DiferenciaisSection from "@/containers/sobre-page/diferenciais-section";
import HeroSection from "@/containers/sobre-page/hero-section";
import MvvSection from "@/containers/sobre-page/mvv-section";
import SobreSection from "@/containers/sobre-page/sobre-section";

export default function Sobre() {
    return (
        <main className="bg-black">
            <Header
                bg_color="bg-black"
            />
            <HeroSection/>
            <SobreSection/>
            <MvvSection/>
            <DiferenciaisSection/>
            <FormContato/>
            <Footer/>
        </main>
    );
}
