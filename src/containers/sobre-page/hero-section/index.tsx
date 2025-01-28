import Image from "next/image";

import ImagemHero from "~/image/heros/hero-sobre.png";

export default function HeroSection() {
    return (
        <section className="max-w-full">
            <Image
                src={ImagemHero}
                alt="Imagem Entrada Showroom Tecnofeal"
            />
        </section>
    );
}