import Image from "next/image";
import { Montserrat } from "next/font/google";

import "./style.css";
import ImagemCanto from "@/assets/img/icone-canto-branco-esquerda.png";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function TitleSectionProdutos() {
    return (
        <section className="relative py-5 pt-20">
            <div className="mx-auto w-9/12 flex justify-center">
                <strong className="titulo-fundo-produtos">produtos</strong>
                <div className="titulo-container-produtos">
                    <div className="img-canto-produtos">
                        <Image
                            src={ImagemCanto}
                            alt="Imagem canto"
                        />
                    </div>
                    <h1>Produtos Tecnofeal</h1>
                    <p className={montserrat.className}>Na Tecnofeal, cada produto é desenvolvido para unir design sofisticado, tecnologia de ponta e alta performance. Nossas soluções atendem às mais diversas demandas de projetos arquitetônicos de luxo, garantindo durabilidade, funcionalidade e exclusividade.
                    <br/>Conheça nossas categorias:
                    </p>
                </div>
            </div>
        </section>
    );
}