import AboutSection from "@/components/sobre/about-section";
import FactorySection from "@/components/sobre/factory-section";
import HeroSection from "@/components/sobre/hero-section";
import ShowroomSection from "@/components/sobre/showroom-section";
import SustentabilitySection from "@/components/sobre/sustentability-section";

export default function Sobre() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ShowroomSection />
            <FactorySection />
            <SustentabilitySection  />
        </>
    );
}