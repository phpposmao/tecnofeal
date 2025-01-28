'use client'
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Feal60 from "@/assets/img/produtos/feal-60.png";
import Feal90 from "@/assets/img/produtos/feal-90.png";
import FealBond from "@/assets/img/produtos/feal-bond.png";
import FealBondVentilada from "@/assets/img/produtos/feal-bond-ventilada.png";

export default function TerSliderSectionProdutos() {
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
          perView: 4,
        },
    });
    
    return (
        <section className="relative py-5 pt-0">
            <div className="mx-auto">
                <div className="titulo-slider-produtos">
                    <h2>Sistemas de Fachada</h2>
                </div>
                <div>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1 project">
                            <figure>
                                <Image 
                                    src={Feal60}
                                    alt="Projeto Um"
                                    className="block w-full transition-all"
                                />
                                <figcaption>
                                    <h3 className="project-title">
                                    Feal 60
                                    </h3>
                                    <h4 className="project-category">
                                    Fachada
                                    </h4>
                                    <div className="project-zoom"></div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide2 project">
                            <figure>
                                <Image 
                                    src={Feal90}
                                    alt="Projeto Um"
                                    className="block w-full transition-all"
                                />
                                <figcaption>
                                    <h3 className="project-title">
                                    Feal 90
                                    </h3>
                                    <h4 className="project-category">
                                    Fachadas
                                    </h4>
                                    <div className="project-zoom"></div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide3 project">
                            <figure>
                            <Image 
                                src={FealBond}
                                alt="Projeto Um"
                                className="block w-full transition-all"
                            />
                            <figcaption>
                                <h3 className="project-title">
                                Feal Bond
                                </h3>
                                <h4 className="project-category">
                                Fachadas
                                </h4>
                                <div className="project-zoom"></div>
                            </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide4 project">
                            <figure>
                            <Image 
                                src={FealBondVentilada}
                                alt="Projeto Um"
                                className="block w-full transition-all"
                            />
                            <figcaption>
                                <h3 className="project-title">
                                Feal Bond Ventilada
                                </h3>
                                <h4 className="project-category">
                                Fachadas
                                </h4>
                                <div className="project-zoom"></div>
                            </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide5 project">
                            <figure>
                            <Image 
                                src={Feal60}
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
                                <div className="project-zoom"></div>
                            </figcaption>
                            </figure>
                        </div>
                        <div className="keen-slider__slide number-slide6 project">
                            <figure>
                            <Image 
                                src={Feal60}
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