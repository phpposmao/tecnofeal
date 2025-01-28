import Image from "next/image";

import "./style.css";
import ImagemHero from "~/image/heros/hero-produtos.png";

export default function HeroSectionProdutos() {
    return (
        <section className="max-w-full">
            <div className="hero-container-produtos">
                <Image 
                    src={ImagemHero}
                    alt="Feal Produtos"
                />
            </div>
        </section>
    );
}