import Image from "next/image";

import "./style.css";
import EntreVaos from "@/assets/img/produtos/entre-vaos.png";
import Continua from "@/assets/img/produtos/continua.png";

export default function DoubleSectionProdutos() {
    return (
        <section className="relative py-5 pt-0">
            <div className="mx-auto">
                <div className="titulo-slider-produtos">
                    <h2>Tipologias de Fachadas</h2>
                </div>
                <div className="container-double-produtos">
                    <figure>
                        <Image 
                            src={EntreVaos}
                            alt="Projeto Um"
                            className="block w-full transition-all"
                        />
                        <figcaption>
                            <h3 className="project-title">
                            Entre Vãos
                            </h3>
                            <h4 className="project-category">
                            Fachadas
                            </h4>
                            <div className="project-zoom"></div>
                        </figcaption>
                    </figure>
                    <figure>
                        <Image 
                            src={Continua}
                            alt="Projeto Um"
                            className="block w-full transition-all"
                        />
                        <figcaption>
                            <h3 className="project-title">
                            Contínua
                            </h3>
                            <h4 className="project-category">
                            Fachadas
                            </h4>
                            <div className="project-zoom"></div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}