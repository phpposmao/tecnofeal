"use client"

import { useRef, useEffect } from "react"
import { productCategories, getProductsByCategory } from "@/lib/products"
import ProductCarousel from "./product-carousel"

export default function ProductCategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll(".fade-up, .fade-left, .fade-right")
            animatedElements.forEach((element) => {
              element.classList.add("appear")
            })
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-[1140px] mx-auto px-4">

        <div className="space-y-24">
          {productCategories.map((category, index) => {
            const categoryProducts = getProductsByCategory(category.slug)
            return (
              <div key={category.id} className={`fade-${index % 2 === 0 ? "left" : "right"} delay-${index * 200}`}>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-light uppercase tracking-wider mb-2">Conheça nossa linha</h3>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 border border-primary  px-4 py-2">
                    <span className="text-xl uppercase tracking-wider font-light">{category.name}</span>
                  </div>
                </div>
                <ProductCarousel products={categoryProducts} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
