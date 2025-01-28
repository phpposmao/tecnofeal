'use client'
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Feal40 from "@/assets/img/produtos/feal-40.png";
import Feal55 from "@/assets/img/produtos/feal-55.png";
import Feal75 from "@/assets/img/produtos/feal-75.png";
import Feal100 from "@/assets/img/produtos/feal-100.png";

export default function SecSliderSectionProdutos() {
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
                    <h2>Sistemas de Esquadrias</h2>
                </div>
                <div>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1 project">
                            <figure>
                                <Image 
                                    src={Feal40}
                                    alt="Projeto Um"
                                    className="block w-full transition-all"
                                />
                                <figcaption>
                                    <h3 className="project-title">
                                    Feal 40
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
                                    src={Feal55}
                                    alt="Projeto Um"
                                    className="block w-full transition-all"
                                />
                                <figcaption>
                                    <h3 className="project-title">
                                    Feal 55
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
                                src={Feal75}
                                alt="Projeto Um"
                                className="block w-full transition-all"
                            />
                            <figcaption>
                                <h3 className="project-title">
                                Feal 75
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
                                src={Feal100}
                                alt="Projeto Um"
                                className="block w-full transition-all"
                            />
                            <figcaption>
                                <h3 className="project-title">
                                Feal 100
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
                                src={Feal40}
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
                                src={Feal40}
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