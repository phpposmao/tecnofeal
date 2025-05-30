"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { news, newsCategories } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Montserrat } from "next/font/google"
import useEmblaCarousel from "embla-carousel-react"

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])


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
    <section ref={sectionRef} className="py-24 bg-secondary/20 dark:bg-[#d9d9d9]">
      <div className="w-[95%] mx-auto px-4">
        <h2 className="section-title text-center tracking-widest dark:text-black mb-4">Notícias</h2>

        {/* Categorias de notícias */}
        <div className="flex justify-center mb-6">
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


          {/* News Slider - Sem espaçamento nas laterais */}
          <div className="overflow-hidden mx-0">
            <div
              className="flex transition-transform duration-500 ease-out"
            >
              {/*
              filteredNews.map((item) => (
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
              ))
              */}
              {filteredNews.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_20%] pl-4">
                  <div className="relative h-[180px]">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col justify-between bg-white">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs uppercase tracking-wider text-black font-light">{item.category}</span>
                      <span className="text-xs font-light text-neutral-500">{item.date}</span>
                    </div>
                    <h3 className="text-base font-light uppercase text-black tracking-wider mb-2">{item.title}</h3>
                    <p className={`font-light text-xs text-neutral-600 ${montserrat.className} dark:text-neutral-400 mb-6`}>{item.excerpt}</p>
                    <Link href={`/noticias/${item.slug}`}>
                      <Button variant="outline" size="sm" className="text-black">
                        Ler +
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/noticias">
            <Button className="text-black">+ Notícias</Button>
          </Link>
        </div>
    </section>
  )
}
