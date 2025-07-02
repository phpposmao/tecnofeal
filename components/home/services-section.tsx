"use client"

import { useRef, useEffect } from "react"
import { services } from "@/lib/data"
import { Montserrat } from "next/font/google"
import { Button } from "../ui/button"
import Link from "next/link"

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
    <section ref={sectionRef} className="pt-24 bg-[#d9d9d9] fade-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start pl-12">
          {/* Title Section */}
          <div className="w-full md:w-1/4 mb-12 md:mb-0 md:pr-12 ">
            <h2 className={`text-3xl mb-4 ${montserrat.className} dark:text-[#000000] font-bold`}>Nossos<br/> diferenciais</h2>
            <p className={`text-sm font-medium ${montserrat.className} dark:text-[#000000]`}>
              Soluções personalizadas em<br/> esquadrias de alumínio que atendem<br/> ao seu projeto por completo.
            </p>
          </div>

          {/* Services List */}
          <div className={`w-full ${montserrat.className} md:w-3/4 grid grid-cols-1 md:grid-cols-4 gap-8`}>
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <h3 className="text-lg font-normal uppercase dark:text-[#000000] tracking-wider mb-4 pr-5">{service.title}</h3>
                <p className="font-medium text-xs text-neutral-600 dark:text-[#000000] pr-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call-to-Action Banner */}
      <div className="mt-16 bg-black dark:bg-black py-6">
        <div className="container max-w-[50%] mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1140px] mx-auto">
            <p className="text-lg text-white dark:text-white font-bold mb-4 sm:mb-0">Gostaria de conhecer o nosso showroom?</p>
            <Link href="/contato">
              <Button className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700">
                Agende uma Visita
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
