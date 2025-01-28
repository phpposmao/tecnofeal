import Image from "next/image";
import { Montserrat } from "next/font/google";

import "./style.css";
import IconeCanto from "../../../assets/img/icone-canto-branco.png"

const montserrat = Montserrat({ subsets: ["latin"] });

export default function SobreSection() {
    return (
        <section className="relative py-5 pt-16">
            <strong className="titulo-fundo">sobre</strong>
            <div className="mx-auto w-9/12">
                <div className="img-canto">
                    <Image 
                        src={IconeCanto}
                        alt="Imagem canto"
                    />
                </div>
                <div className="title-section">
                    <h1 className="">Sobre a Tecnofeal</h1>
                </div>
                <div className="text-section">
                    <h2>Transformamos ideias<br/>em obras que marcam</h2>
                    <p className={montserrat.className}>Desde 1987, a Tecnofeal é sinônimo de inovação e excelência em esquadrias de alumínio de luxo. Nossa história é marcada por marcos importantes, como a introdução de conceitos minimalistas, parcerias com arquitetos renomados e o lançamento da linha Feal Slim Glass, que elevou os padrões de elegância e funcionalidade.
                    Com uma fábrica própria em um espaço de mais de 14 mil m² e um showroom, localizado no coração de São Paulo, refletimos nossa essência, nosso compromisso com a qualidade e a inovação. Transformar projetos arquitetônicos em obras que atravessam gerações, sempre alinhando design, funcionalidade e responsabilidade ambiental.</p>
                </div>
            </div>
        </section>
    );
}