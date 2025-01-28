//import Image from "next/image";

import { ProjectSlider } from "@/components/ProjectSlider/ProjectSlider";
import { SectionHeader } from "@/components/SectionHeader";

export default function ProjetosSectionHome() {
    return (
        <section className="bg-primary-grey relative">
            <div className="mx-auto w-full">
                <SectionHeader 
                    name="projetos"
                    title="Nossos projetos"
                />
                <ProjectSlider />
            </div>
        </section>
    );
}