import Image from "next/image";

import ImagemHero from "~/image/heros/hero-projetos.png";

export default function HeroSectionProjetos() {
    return (
        <section className="max-w-full">
            <Image
                src={ImagemHero}
                alt="Imagem Projeto Tecnofeal"
            />
        </section>
    );
}