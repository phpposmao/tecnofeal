import Image from "next/image";
import { Montserrat } from "next/font/google";

import "./style.css"

import ImagemProjeto from "../../../assets/img/imagem-projeto.png"
import IconMissao from "../../../assets/img/icons/icon-doseujeito-tecnofeal.png";
import IconVisao from "../../../assets/img/icons/icon-seuprojeto-tecnofeal.png";
import IconValores from "../../../assets/img/icons/icon-agregandovalor-tecnofeal.png";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function MvvSection() {
    return (
        <section className="relative py-5 pt-16">
            <div className="mx-auto w-9/12">
                <strong className="titulo-fundo-direita">MVV</strong>
                <div className="titulo">
                    <h2>MVV</h2>
                </div>
                <div className="content">
                    <div className="content-l">
                        <div className="content-mv">
                            <div className="content-m">
                                <Image 
                                    src={IconMissao}
                                    alt="Icone Missão"
                                />
                                <h3>Missão</h3>
                                <p className={montserrat.className}>Oferecer soluções em esquadrias de luxo que combinam qualidade, inovação e design sofisticado, transformando projetos em estruturas icônicas que alinham estética, funcionalidade e sustentabilidade.</p>
                            </div>
                            <div className="content-v">
                                <Image 
                                    src={IconVisao}
                                    alt="Icone Visão"
                                />
                                <h3>Visão</h3>
                                <p className={montserrat.className}>Ser a referência definitiva em esquadrias de alumínio de alta performance, reconhecida pela excelência, inovação constante e práticas sustentáveis, redefinindo padrões para os projetos mais ambiciosos.</p>
                            </div>
                        </div>
                        <Image 
                            src={ImagemProjeto}
                            alt="Imagem Projeto"
                        />
                    </div>
                    <div className="content-r">
                        <Image 
                            src={IconValores}
                            alt="Icone Valores"
                        />
                        <h3>Valores</h3>
                        <p className={montserrat.className}><strong>Qualidade</strong>: produtos e serviços que excedem expectativas, com atenção aos mínimos detalhes.<br/><br/>
                            <strong>Inovação</strong>: soluções tecnológicas que antecipam tendências e se destacam no mercado de luxo.<br/><br/>
                            <strong>Sustentabilidade</strong>: práticas e materiais responsáveis que promovem um futuro mais verde.<br/><br/>
                            <strong>Exclusividade</strong>: atendimento personalizado e soluções sob medida para cada cliente.<br/><br/>
                            <strong>Compromisso</strong>: parcerias sólidas com arquitetos e construtoras para resultados excepcionais.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
