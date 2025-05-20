"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { news, newsCategories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("Todos")
  const sectionRef = useRef<HTMLElement>(null)

  // Filtrar notícias pela categoria selecionada
  const filteredNews = activeCategory === "Todos" ? news : news.filter((item) => item.category === activeCategory)

  const maxIndex = Math.max(0, filteredNews.length - 3)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory])

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
    <section ref={sectionRef} className="py-24 bg-secondary/20 dark:bg-[#d9d9d9] fade-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center tracking-widest dark:text-black mb-8">Notícias</h2>

        {/* Categorias de notícias */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap justify-center">
            {newsCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm uppercase tracking-wider font-light text-black transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white dark:bg-black dark:text-white"
                    : "hover:bg-neutral-200 dark:hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Slider Controls - Agora com botões quadrados */}
          <div className="flex justify-between absolute top-1/2 left-4 right-4 -mt-6 z-10">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black transition-colors border border-neutral-300 dark:border-neutral-700"
              disabled={currentIndex === 0}
              aria-label="Notícia anterior"
            >
              <ChevronLeft size={24} className={currentIndex === 0 ? "opacity-50" : ""} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black transition-colors border border-neutral-300 dark:border-neutral-700"
              disabled={currentIndex === maxIndex}
              aria-label="Próxima notícia"
            >
              <ChevronRight size={24} className={currentIndex === maxIndex ? "opacity-50" : ""} />
            </button>
          </div>

          {/* News Slider - Sem espaçamento nas laterais */}
          <div className="overflow-hidden mx-0">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {filteredNews.map((item) => (
                <div key={item.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                  <div className="bg-white border border-neutral-200 h-full">
                    <div className="relative h-[240px]">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm uppercase tracking-wider text-black font-light">{item.category}</span>
                        <span className="text-sm font-light text-neutral-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-light uppercase text-black tracking-wider mb-2">{item.title}</h3>
                      <p className={`font-light text-neutral-600 ${montserrat.className} dark:text-neutral-400 mb-6`}>{item.excerpt}</p>
                      <Link href={`/noticias/${item.slug}`}>
                        <Button variant="outline" size="sm" className="text-black">
                          Ler +
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/noticias">
            <Button className="text-black">+ Notícias</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
