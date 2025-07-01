"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

interface Product {
  id: number
  name: string
  slug: string
  image: string
  price: string
  description: string
  category: string
}

interface ProductCarouselProps {
  products: Product[]
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  if (products.length === 0) return null

  return (
    <div className="relative">
      {/* Slider Controls */}
      <div className="flex justify-between absolute top-1/2 -left-4 -right-4 -mt-6 z-10">
        <button
          onClick={scrollPrev}
          className="p-2 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors border border-neutral-300 dark:border-neutral-700 shadow-lg disabled:opacity-50"
          disabled={prevBtnDisabled}
          aria-label="Produto anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="p-2 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors border border-neutral-300 dark:border-neutral-700 shadow-lg disabled:opacity-50"
          disabled={nextBtnDisabled}
          aria-label="Próximo produto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                <Link href={`/produtos/${product.category}`} className="block group">
                    <div className="relative bg-neutral-50 dark:bg-neutral-900 p-6 transition-all duration-300 group-hover:shadow-lg mr-4">
                        <Image
                            src={product.image || "/image/produtos/produtos-placeholder.png"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="relative h-[300px]">
                            <p className="text-xl font-light uppercase absolute bottom-10">{product.category}</p>
                            <h4 className="text-lg font-light uppercase tracking-wider absolute bottom-4">{product.name}</h4>
                        </div>
                    </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

