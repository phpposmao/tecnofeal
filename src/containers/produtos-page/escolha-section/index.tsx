import Image from "next/image";
import { Montserrat } from "next/font/google";

import "./style.css"
import ImagemCanto from "@/assets/img/icone-canto-branco.png";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function EscolhaSectionProdutos() {
    return (
        <section className="relative py-5 pt-20">
            <div className="mx-auto w-9/12 flex justify-center">
                <strong className="titulo-fundo-produtos">escolha ideal</strong>
                <div className="titulo-container-produtos">
                    <div className="img-canto-produtos-dir">
                        <Image
                            src={ImagemCanto}
                            alt="Imagem canto"
                        />
                    </div>
                    <h2>A escolha ideal para<br/>projetos de alto padrão</h2>
                        <p className={montserrat.className}>Combinando tecnologia de ponta, qualidade extrema e design exclusivo, a Tecnofeal<br/>transforma projetos em verdadeiras obras-primas arquitetônicas.
                    </p>
                </div>
            </div>
        </section>
    );
}