import Image from "next/image";
import { Montserrat } from "next/font/google";

import "./style.css";
import ImagemProjetos from "@/assets/img/imagem-projetos.png";
import IconeCanto from "@/assets/img/icone-canto-branco-esquerda.png"

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ComercialSectionProjetos() {
    return (
        <section className="relative py-5 pt-16">
            <div className="mx-auto">
                <div className="titulo-projetos">
                    <h2>Comercial</h2>
                </div>
                <div className="container-comercial-projetos">
                    <div className="imagem-projetos-container">
                        <Image 
                            src={ImagemProjetos}
                            alt="Imagem Projeto"
                        />
                    </div>
                    <div className="card-comercial-projetos">
                        <div className="img-canto-1">
                            <Image 
                                src={IconeCanto}
                                alt="Imagem canto"
                            />
                        </div>
                        <h3>Sede Bayer</h3>
                        <p className={montserrat.className}>A Sede Bayer é um marco na arquitetura corporativa, resultado de um retrofit que transformou três prédios em verdadeiras obras-primas. Em parceria com a Alubond, a Tecnofeal aplicou 123 toneladas de alumínio utilizando o sistema Structural Glazing, que proporciona um equilíbrio perfeito entre leveza estética e robustez estrutural.

                            <br/><br/>Criamos marcos no universo corporativo: esquadrias com 5 anos de garantia e desempenho superior para obras de alto impacto.

                            <br/><br/>Este projeto reafirma o compromisso da Tecnofeal em transformar ideias em estruturas icônicas que atravessam gerações.
                        </p>
                    </div>
                </div>
                <div className="container-comercial-projetos">
                    <div className="card-comercial-projetos">
                        <div className="img-canto-esq-1">
                            <Image 
                                src={IconeCanto}
                                alt="Imagem canto"
                            />
                        </div>
                        <h3>Edificio São Paulo<br/>Corporate Tower</h3>
                        <p className={montserrat.className}>A Sede Bayer é um marco na arquitetura corporativa, resultado de um retrofit que transformou três prédios em verdadeiras obras-primas. Em parceria com a Alubond, a Tecnofeal aplicou 123 toneladas de alumínio utilizando o sistema Structural Glazing, que proporciona um equilíbrio perfeito entre leveza estética e robustez estrutural.

                            <br/><br/>Criamos marcos no universo corporativo: esquadrias com 5 anos de garantia e desempenho superior para obras de alto impacto.

                            <br/><br/>Este projeto reafirma o compromisso da Tecnofeal em transformar ideias em estruturas icônicas que atravessam gerações.
                        </p>
                    </div>
                    <div className="imagem-projetos-container">
                        <Image 
                            src={ImagemProjetos}
                            alt="Imagem Projeto"
                        />
                    </div>
                </div>
                <div className="container-comercial-projetos">
                    <div className="imagem-projetos-container">
                        <Image 
                            src={ImagemProjetos}
                            alt="Imagem Projeto"
                        />
                    </div>
                    <div className="card-comercial-projetos">
                        <div className="img-canto-2">
                            <Image 
                                src={IconeCanto}
                                alt="Imagem canto"
                            />
                        </div>
                        <h3>Hospital Sírio-Libanês</h3>
                        <p className={montserrat.className}>A expansão do Hospital Sírio-Libanês, inaugurada em 2015, é uma das obras mais emblemáticas da Tecnofeal e da engenharia hospitalar no Brasil. Com 54 pavimentos e 70 mil m² de área construída, este projeto desafiador incluiu 34 mil m² de caixilhos, fachadas e revestimentos metálicos, estabelecendo um recorde de 23 mil m² de fachadas para o segmento hospitalar.

                            <br/><br/>A personalização foi o diferencial, com soluções inovadoras como persianas Feal Wide 4000 e janelas Maxim-Ar com blackout automatizado, que garantem assepsia, conforto termoacústico e funcionalidade. O sistema de fachada unitizada Feal Unitized, projetado para instalação rápida e flexível, reforça a capacidade de adaptação do hospital a futuras necessidades.

                            <br/><br/>Este projeto reflete o compromisso da Tecnofeal com inovação, eficiência e excelência em obras de alta complexidade, destacando-se como um exemplo de engenharia hospitalar moderna e funcional.
                        </p>
                    </div>
                </div>
                <div className="container-comercial-projetos">
                    <div className="card-comercial-projetos">
                        <div className="img-canto-esq-2">
                            <Image 
                                src={IconeCanto}
                                alt="Imagem canto"
                            />
                        </div>
                        <h3>WTorre Morumbi</h3>
                        <p className={montserrat.className}>A WTorre Morumbi redefine o skyline de São Paulo com seus 173 mil m² de área construída, sendo a maior torre corporativa da cidade. A Tecnofeal desempenhou um papel essencial nesse projeto icônico, fornecendo e instalando mais de 50 mil m² de fachadas unitizadas de alta performance.

                            <br/><br/>Desenvolvido pelo renomado escritório Aflalo & Gasperini, o projeto apresentou desafios únicos, como a integração de duas torres conectadas por cinco passarelas. Para superar essas demandas, a Tecnofeal criou soluções personalizadas que aliam funcionalidade, inovação e estética.

                            <br/><br/>O resultado é um edifício que não apenas atende aos mais altos padrões técnicos, mas também se consolida como um ícone do mercado corporativo, destacando-se pela imponência e sofisticação.
                        </p>
                    </div>
                    <div className="imagem-projetos-container">
                        <Image 
                            src={ImagemProjetos}
                            alt="Imagem Projeto"
                        />
                    </div>
                </div>
                <div className="container-comercial-projetos">
                    <div className="imagem-projetos-container">
                        <Image 
                            src={ImagemProjetos}
                            alt="Imagem Projeto"
                        />
                    </div>
                    <div className="card-comercial-projetos">
                        <div className="img-canto-3">
                            <Image 
                                src={IconeCanto}
                                alt="Imagem canto"
                            />
                        </div>
                        <h3>Condomínio Vila dos Lagos</h3>
                        <p className={montserrat.className}>O projeto Vila dos Lagos apresenta um conceito único de proteção solar e filtro de luz com o uso de muxarabis de madeira nas fachadas superiores. Durante o dia, as sombras projetadas criam ambientes confortáveis e dinâmicos; à noite, a luz interna filtra pelos painéis, transformando a casa em uma luminária suave que embeleza a paisagem.

                            <br/><br/>A Tecnofeal foi fundamental para concretizar essa visão arquitetônica, utilizando a linha Feal Slim. Com montantes esbeltos, trilhos e batedores embutidos, a solução reforçou a integração visual entre os espaços interno e externo sem comprometer o design original.

                            <br/><br/>A flexibilidade em adaptar os sistemas às especificações estéticas do Studio MK27 garantiu um resultado impecável, alinhando funcionalidade e design sofisticado. O Condomínio Vila dos Lagos é um exemplo claro de como tecnologia e estética podem transformar ambientes residenciais em obras de arte arquitetônicas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}