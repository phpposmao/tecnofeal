"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import ProjectCard from "./project-card"

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, projects.length - 3)
  const sectionRef = useRef<HTMLElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-[#323232] fade-up">
      <div className="max-w-[1140px] mx-auto px-4 mb-16">
        <h2 className="section-title text-center">Nossos Projetos</h2>
      </div>

      <div className="relative">
        {/* Slider Controls - Agora com botões quadrados */}
        <div className="flex justify-between absolute top-1/2 left-4 right-4 -mt-6 z-10">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black transition-colors border border-neutral-300 dark:border-neutral-700"
            disabled={currentIndex === 0}
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} className={currentIndex === 0 ? "opacity-50" : ""} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black transition-colors border border-neutral-300 dark:border-neutral-700"
            disabled={currentIndex === maxIndex}
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} className={currentIndex === maxIndex ? "opacity-50" : ""} />
          </button>
        </div>

        {/* Projects Slider - Ocupando toda a largura da tela */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full md:w-1/3 flex-shrink-0 mr-5">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  image={project.image}
                  slug={project.slug}
                  category={project.category}
                  location={project.location}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 mt-12 text-center">
        <Link href="/projetos">
          <Button className="border-[#ffffff] hover:bg-[#000000] duration-700">+ Projetos</Button>
        </Link>
      </div>
    </section>
  )
}
