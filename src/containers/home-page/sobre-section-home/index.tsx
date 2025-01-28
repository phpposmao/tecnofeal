import Image from "next/image";

import IconeArquitetura from "~/image/icons/icone-arquitetura-tecnofeal.png";
import IconeInteriores from "~/image/icons/icone-interiores-tecnofeal.png";
import IconePlanejamento from "~/image/icons/icone-planejamento-tecnofeal.png";
import ImagemTeste from "~/image/sobre-imagem-home.png";
import { SectionHeader } from "@/components/SectionHeader";

import "./style.css";

export default function SobreSectionHome() {
    return (
        <section className="sobre-section">
            <div className="container">
                <SectionHeader title="Sobre a tecnofeal" name="sobre" />
                <div className="content">
                    <div className="info">
                        <div className="text-section">
                            <h3>Transformando ideias em obras de arte</h3>
                            <div className="description">
                                <span>
                                    Com 37 anos de trajetória marcada pela inovação, a Tecnofeal é
                                    referência em esquadrias e fachadas personalizadas de alumínio.
                                    Somos especialistas em criar soluções que aliam sofisticação,
                                    funcionalidade e tecnologia, permitindo aplicações às mais diversas
                                    tipologias e necessidades do mercado. Nossas linhas exclusivas
                                    conectam tendência e identidade, transformando cada projeto em uma
                                    experiência única. Mais do que fornecer produtos, unimos design e
                                    rigor técnico, garantindo que cada obra se torne uma marca
                                    registrada de excelência e estilo. Descubra como nossas soluções
                                    em alumínio podem transformar seu projeto.
                                </span>
                            </div>
                        </div>
                        <div className="specialization">
                            <h3>Nossa<br />especialização</h3>
                            <div className="specialization-item">
                                <Image src={IconeArquitetura} alt="Arquitetura" />
                                <h4>Arquitetura</h4>
                            </div>
                            <div className="specialization-item">
                                <Image src={IconeInteriores} alt="Interiores" />
                                <h4>Interiores</h4>
                            </div>
                            <div className="specialization-item">
                                <Image src={IconePlanejamento} alt="Planejamento" />
                                <h4>Planejamento</h4>
                            </div>
                        </div>
                        <div className="image-section">
                            <Image
                                alt="Sobre Tecnofeal"
                                className="responsive-image"
                                src={ImagemTeste}
                            />
                            <button className="btn">
                                Saiba mais sobre a tecnofeal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
