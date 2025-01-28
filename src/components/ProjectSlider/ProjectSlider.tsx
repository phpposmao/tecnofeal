'use client'
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import Project1 from "../../assets/img/slider/1.png";
import Project2 from "../../assets/img/slider/2.png";
import Project3 from "../../assets/img/slider/3.png";
import Project4 from "../../assets/img/slider/4.png";

export function ProjectSlider() {
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
    <div ref={sliderRef} className="keen-slider">

      <div className="keen-slider__slide number-slide1 project">
        <figure>
          <Image 
            src={Project1}
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
      <div className="keen-slider__slide number-slide2 project">
        <figure>
          <Image 
            src={Project2}
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
      <div className="keen-slider__slide number-slide3 project">
        <figure>
          <Image 
            src={Project3}
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
      <div className="keen-slider__slide number-slide4 project">
        <figure>
          <Image 
            src={Project4}
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
      <div className="keen-slider__slide number-slide5 project">
        <figure>
          <Image 
            src={Project1}
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
      <div className="keen-slider__slide number-slide6 project">
        <figure>
          <Image 
            src={Project1}
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
  )
}
