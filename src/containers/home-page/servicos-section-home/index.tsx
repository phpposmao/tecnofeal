import Image from "next/image";

import IconeEspecializacao from "~/image/icons/icone-especializacao.png";
import IconeInovacao from "~/image/icons/icone-inovacao.png";
import IconePersonalizacao from "~/image/icons/icone-personalizacao.png";
import { SectionHeader } from "@/components/SectionHeader";

import "./style.css";

export default function ServicosSectionHome() {
    return (
        <section className="servicos-section">
            <div className="container">
                <SectionHeader title="Nossos serviços" name="serviços" />
                <div className="content">
                    <div className="services">
                        <div className="service-item">
                            <div>
                                <Image src={IconeEspecializacao} alt="Acessoria Especializada" className="service-icon" />
                                <h4>Acessoria Especializada</h4>
                                <p>
                                    Auxiliamos na escolha da linha ideal para cada projeto,
                                    considerando as necessidades específicas.
                                </p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div>
                                <Image src={IconeInovacao} alt="Tecnologia e Inovação" className="service-icon" />
                                <h4>Tecnologia e Inovação</h4>
                                <p>
                                    Criamos soluções técnicas avançadas que tornam possíveis até os
                                    projetos mais desafiadores.
                                </p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div>
                                <Image src={IconePersonalizacao} alt="Personalização" className="service-icon" />
                                <h4>Personalização</h4>
                                <p>
                                    Soluções sob medida que se adaptam às necessidades de empresas ou
                                    residências, unindo design e funcionalidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
