"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string
}

export default function ProjectsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const projects: Project[] = [
    {
      id: 1,
      title: "Residencia Joá",
      description: "Rio de Janeiro, RJ",
      image: "/image/projetos/residencial-joa.png",
      category: "Residencial Horizontal",
    },
    {
      id: 2,
      title: "Edificio São Paulo Corporate",
      description: "Vila Olímpia, SP",
      image: "/image/projetos/edificio-sp-corporate.png",
      category: "Comercial",
    },
    {
      id: 3,
      title: "Residência WT Praia da Baleia",
      description: "São Sebastião, SP",
      image: "/image/projetos/residencial-wt.png",
      category: "Residencial Vertical",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, LI",
      image: "/image/projetos/edificio-sp-corporate.png",
      category: "Residencial Horizontal",
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, LI",
      image: "/image/projetos/residencial-wt.png",
      category: "Residencial Horizontal",
    },
  ]

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-24 bg-white dark:bg-[#323232]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light tracking-widest mb-16 text-center dark:text-white">NOSSOS PROJETOS</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_28%] pl-4">
                  <div className="group relative overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-black/80">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-sm text-white/70 mb-2">{project.category}</span>
                      <h3 className="text-xl font-light text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors z-10"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="h-5 w-5 dark:text-white" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors z-10"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="h-5 w-5 dark:text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === selectedIndex ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="max-w-[1140px] mx-auto px-4 mt-12 text-center">
            <Link href="/projetos">
                <Button className="dark:border-[#ffffff] hover:bg-[#000000] duration-700">+ Projetos</Button>
            </Link>
        </div>
      </div>
    </section>
  );
}