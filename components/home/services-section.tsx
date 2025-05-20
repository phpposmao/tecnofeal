"use client"

import { useRef, useEffect } from "react"
import { services } from "@/lib/data"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="py-24 bg-[#d9d9d9] fade-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start pl-12">
          {/* Title Section */}
          <div className="w-full md:w-1/3 mb-12 md:mb-0 md:pr-12 ">
            <h2 className="section-title dark:text-[#000000]">Nossos<br/> Serviços</h2>
            <p className={`section-subtitle ${montserrat.className} dark:text-[#000000]`}>
              Soluções personalizadas em<br/> esquadrias de alumínio que atendem<br/> ao seu projeto por completo.
            </p>
          </div>

          {/* Services List */}
          <div className={`w-full ${montserrat.className} md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8`}>
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <h3 className="text-xl font-normal uppercase dark:text-[#000000] tracking-wider mb-4 pr-5">{service.title}</h3>
                <p className="font-light text-neutral-600 dark:text-[#000000] pr-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
