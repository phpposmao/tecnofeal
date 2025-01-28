import Image from "next/image";
import { Montserrat } from "next/font/google";

import "./style.css";
import ImagemProjetos from "@/assets/img/imagem-projetos.png";
import IconeCanto from "@/assets/img/icone-canto-branco-esquerda.png"

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ResidencialSectionProjetos() {
    return (
        <section className="relative py-5 pt-16">
            <div className="mx-auto">
                <div className="titulo-projetos">
                    <h2>Residencial</h2>
                </div>
                <div className="container-residencial-projetos">
                    <div className="imagem-projetos-container">
                        <Image 
                            src={ImagemProjetos}
                            alt="Imagem Projeto"
                        />
                    </div>
                    <div className="card-residencial-projetos">
                        <div className="img-canto-1-res">
                            <Image 
                                src={IconeCanto}
                                alt="Imagem canto"
                            />
                        </div>
                        <h3>Residencia Banco Santos</h3>
                        <p className={montserrat.className}>O projeto da Residência Banco Santos contou com a linha Feal Macro 100, uma solução desenvolvida para atender projetos de grandes proporções. Com perfis robustos e flexíveis, a linha suportava vidros de até 50 mm de espessura, oferecendo conforto termoacústico, segurança e estética sofisticada.

                            <br/><br/>Os acabamentos personalizados, como anodização e pintura eletrostática, garantiram durabilidade e adaptabilidade ao design do projeto. Automatização e sensores de presença elevaram a funcionalidade, tornando a solução ideal para demandas arquitetônicas ambiciosas.

                            <br/><br/>A excelência da linha Feal Macro 100 foi tão reconhecida que foi incorporada na porta de entrada do showroom da Tecnofeal, reforçando a capacidade da empresa de combinar tecnologia e design em harmonia. Hoje, sua evolução é representada pela linha Feal Slim 120, que continua a redefinir os padrões de inovação no mercado.</p>
                    </div>
                </div>
                <div className="container-residencial-projetos">
                    <div className="card-residencial-projetos">
                        <div className="img-canto-2-res">
                            <Image 
                                src={IconeCanto}
                                alt="Imagem canto"
                            />
                        </div>
                        <h3>Casa AS</h3>
                        <p className={montserrat.className}>No projeto da Casa AS, a premissa inicial era utilizar madeira, mas os clientes optaram por um material de longa duração e baixa manutenção. A solução veio com os brises de alumínio com acabamento de efeito madeira da EzyColor, que reproduzem com precisão a aparência dos veios da madeira, atendendo perfeitamente às expectativas.

                            <br/><br/>O escritório FGMF escolheu o alumínio não apenas pela durabilidade, mas também pela leveza e qualidade do sistema, especialmente para o mecanismo de portas camarão. Este sistema inovador proporciona controle de luz ajustável, permitindo abertura total ou parcial ao movimentar as aletas verticais com um simples toque.

                            <br/><br/>A criação do sistema Feal Brises Touch trouxe não só sofisticação, mas também praticidade, com soluções leves e fáceis de manusear. Este projeto destaca a capacidade da Tecnofeal de unir design inovador e funcionalidade, entregando resultados que superam as expectativas dos clientes.</p>
                    </div>
                    <div className="imagem-projetos-container">
                        <Image 
                            src={ImagemProjetos}
                            alt="Imagem Projeto"
                        />
                    </div>
                </div>
                <div className="container-residencial-projetos">
                    <div className="imagem-projetos-container">
                        <Image 
                            src={ImagemProjetos}
                            alt="Imagem Projeto"
                        />
                    </div>
                    <div className="card-residencial-projetos">
                        <div className="img-canto-3-res">
                            <Image 
                                src={IconeCanto}
                                alt="Imagem canto"
                            />
                        </div>
                        <h3>Casa Gana</h3>
                        <p className={montserrat.className}>A Casa Gana trouxe um desafio único para a Tecnofeal: garantir a logística de envio de esquadrias minimalistas com segurança até o continente africano. Para isso, foi necessário planejar cuidadosamente cada detalhe do transporte.

                            <br/><br/>Foram contratados fornecedores especializados em caixas de madeira fumigadas, capazes de suportar o peso e dimensões das folhas de vidro e alumínio. O envio foi realizado em duas etapas: primeiro, os trilhos e contramarcos, seguidos pelas folhas com vidros embalados, assegurando a integridade dos materiais durante o transporte marítimo.

                            <br/><br/>Este projeto é um exemplo da capacidade da Tecnofeal de enfrentar desafios logísticos e técnicos em escala internacional, entregando soluções de alta qualidade e mantendo o padrão de excelência que define a marca.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}