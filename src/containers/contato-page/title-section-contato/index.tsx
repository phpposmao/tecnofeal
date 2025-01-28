import { Montserrat } from "next/font/google";

import "./style.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function TitleSectionContato() {
    return (
        <section className="relative py-5 pt-20">
            <div className="title-section-contato">
                <h1 className="">Contato</h1>
            </div>
            <div className="mx-auto w-9/12 flex justify-center">
                <strong className="titulo-fundo-contato">contato</strong>
                <div className="titulo-container-contato">
                    <h2>Entre em contato com a Tecnofeal</h2>
                    <p className={montserrat.className}>Estamos prontos para transformar seu projeto em realidade! Preencha o formulário abaixo com os detalhes do que você precisa e nossa equipe entrará em contato o mais rápido possível.
                    <br/><br/>Na Tecnofeal, cada detalhe importa. Envie sua solicitação e descubra como nossas soluções podem elevar seu projeto arquitetônico.
                    </p>
                </div>
            </div>
        </section>
    );
}