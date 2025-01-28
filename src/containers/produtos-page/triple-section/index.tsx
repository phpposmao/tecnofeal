'use client'
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import FealDivvy from "@/assets/img/produtos/feal-divvy.png";
import FealRegua from "@/assets/img/produtos/feal-regua-hospitalar.png";
import FealStrutuctural from "@/assets/img/produtos/feal-structural.png";

export default function TripleSectionProdutos() {


    const [sliderRef] = useKeenSlider({
        loop: true,
        breakpoints: {
            '(max-width: 500px)': {
                slides: {
                    perView: 1,
                },
            }
        },
        slides: {
          perView: 3,
        },
    });
    
    return (
        <section className="relative py-5 pt-0">
            <div className="mx-auto">
                <div className="titulo-slider-produtos">
                    <h2>Tipologias de Esquadrias</h2>
                </div>
                <div>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1 project">
                            <figure>
                                <Image 
                                    src={FealDivvy}
                                    alt="Projeto Um"
                                    className="block w-full transition-all"
                                />
                                <figcaption>
                                    <h3 className="project-title">
                                    Alçante
                                    </h3>
                                    <h4 className="project-category">
                                    Esquadrias
                                    </h4>
                                    <div className="project-zoom"></div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide2 project">
                            <figure>
                                <Image 
                                    src={FealRegua}
                                    alt="Projeto Um"
                                    className="block w-full transition-all"
                                />
                                <figcaption>
                                    <h3 className="project-title">
                                    Camarão
                                    </h3>
                                    <h4 className="project-category">
                                    Esquadrias
                                    </h4>
                                    <div className="project-zoom"></div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide3 project">
                            <figure>
                            <Image 
                                src={FealStrutuctural}
                                alt="Projeto Um"
                                className="block w-full transition-all"
                            />
                            <figcaption>
                                <h3 className="project-title">
                                Curva
                                </h3>
                                <h4 className="project-category">
                                Esquadrias
                                </h4>
                                <div className="project-zoom"></div>
                            </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide4 project">
                            <figure>
                            <Image 
                                src={FealDivvy}
                                alt="Projeto Um"
                                className="block w-full transition-all"
                            />
                            <figcaption>
                                <h3 className="project-title">
                                Correr
                                </h3>
                                <h4 className="project-category">
                                Esquadrias
                                </h4>
                                <div className="project-zoom"></div>
                            </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide5 project">
                            <figure>
                            <Image 
                                src={FealDivvy}
                                alt="Projeto Um"
                                className="block w-full transition-all"
                            />
                            <figcaption>
                                <h3 className="project-title">
                                Residential care<br/> project in Paris
                                </h3>
                                <h4 className="project-category">
                                Esquadrias
                                </h4>
                                <div className="project-zoom">
                                </div>
                            </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide6 project">
                            <figure>
                            <Image 
                                src={FealDivvy}
                                alt="Projeto Um"
                                className="block w-full transition-all"
                            />
                            <figcaption>
                                <h3 className="project-title">
                                Residential care<br/> project in Paris
                                </h3>
                                <h4 className="project-category">
                                Architecture
                                </h4>
                                <div className="project-zoom"></div>
                            </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}