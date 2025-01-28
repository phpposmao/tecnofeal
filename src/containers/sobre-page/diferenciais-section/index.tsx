import Image from "next/image";
import { Montserrat } from "next/font/google";

import "./style.css"

import IconAluminio from "../../../assets/img/icons/aluminio-alta-pureza-tecnofeal.png"
import IconTratamentos from "../../../assets/img/icons/tratamentos-exclusivos-tecnofeal.png"
import IconVedacao from "../../../assets/img/icons/vedacao-isolamento-tecnofeal.png"
import IconFerragens from "../../../assets/img/icons/ferragens-premium-tecnofeal.png"
import IconCertificacoes from "../../../assets/img/icons/certificacoes-comprovadas-tecnofeal.png"

const montserrat = Montserrat({ subsets: ["latin"] });

export default function DiferenciaisSection() {
    return (
        <section className="relative py-5 pt-16">
            <div className="mx-auto w-11/12">
                <strong className="titulo-fundo">diferenciais</strong>
                <div className="titulo">
                    <h2>Nossos Diferenciais</h2>
                </div>
                <div className="subtitulo-diferenciais">
                    <h3>Excelência é um<br/>compromisso.</h3>
                    <p className={montserrat.className}>Nossos produtos são projetados para superar expectativas, unindo durabilidade, inovação e design sofisticado, ideais para projetos de alto padrão</p>
                </div>
                <div className="container-diferenciais">
                    <div className="card-diferenciais">
                        <Image
                            src={IconAluminio}
                            alt="a"
                        />
                        <h4>Alumínio de Alta Pureza</h4>
                        <p className={montserrat.className}>Produtos com resistência excepcional contra corrosão e deformações, garantindo alta durabilidade mesmo nas condições mais adversas. </p>
                    </div>
                    <div className="card-diferenciais">
                        <Image
                            src={IconTratamentos}
                            alt="a"
                        />
                        <h4>Tratamentos Exclusivos</h4>
                        <p className={montserrat.className}>Anodização e pintura eletrostática que protegem contra umidade e raios UV, mantendo a estética impecável.</p>
                    </div>
                    <div className="card-diferenciais">
                        <Image
                            src={IconVedacao}
                            alt="a"
                        />
                        <h4>Tecnologia de vedação e isolamento</h4>
                        <p className={montserrat.className}>Eficiência térmica e acústica com sistemas de alta performance.</p>
                    </div>
                    <div className="card-diferenciais">
                        <Image
                            src={IconFerragens}
                            alt="a"
                        />
                        <h4>Ferragens Premium</h4>
                        <p className={montserrat.className}>Componentes projetados para uso intenso com funcionalidade duradoura.</p>
                    </div>
                    <div className="card-diferenciais">
                        <Image
                            src={IconCertificacoes}
                            alt="a"
                        />
                        <h4>Certificações Comprovadas</h4>
                        <p className={montserrat.className}>Resistência contra vento, água e impacto para máxima confiabilidade.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
