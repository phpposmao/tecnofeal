"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function TrajetoriaSection() {
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
    <section className="py-12">
        <div className="md:flex max-w-[95%] mx-auto px-4">
            {/* Extended Text */}
            <div className={`w-full md:w-1/2 pb-5 md:pr-12`}>
            <div className="relative h-[450px]">
                <Image
                    src="/image/FOTO-04.png"
                    alt="Familia - Tecnofeal"
                    fill
                    className="object-cover"
                />
            </div>
            </div>

            {/* Extended Text */}
            <div className={`w-full md:w-1/2 pl-8 md:pl-12 pr-8 md:pr-10 flex flex-col justify-center`}>
            <div>
                <h2 className="text-2xl font-bold uppercase tracking-wider mb-1">Cada Projeto é Único<br/> Nossa dedicação é Infinita.</h2>
                <p className="mt-5 text-base text-neutral-600 dark:text-neutral-500 font-medium mb-4">
                    Fundada em novembro de 1987, a Tecnofeal surge com o compromisso de entregar soluções em alumínio que moldam a arquitetura contemporânea com precisão, elegância e tecnologia de ponta.
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-500 font-medium mb-4">
                    Com anos de inovação contínua, a empresa mantém sua tradição familiar, gerida por seu fundador e a sua segunda geração, que acompanham de perto cada processo, desde o desenvolvimento dos projetos até a entrega de cada obra.
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-500 font-medium mb-4">
                    Somos atentos ao design e à execução das esquadrias e fachadas que são fabricadas através da FEAL Produtos, uma linha exclusiva que permite personalização.
                </p>

            </div>
        </div>
        </div>
    </section>
  )
}