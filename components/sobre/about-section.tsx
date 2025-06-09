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

export default function AboutSection() {
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
    <section ref={sectionRef} className="bg-background fade-up flex flex-col">
      <div className="container mx-auto px-4 pt-16">
        <h1 className="section-title text-center mb-16">Sobre a Tecnofeal</h1>

        {/* Conteúdo com largura máxima de 1140px */}
        <div className="max-w-[1040px] mx-auto">
          <div className="flex flex-col text-center md:text-left md:flex-row gap-12">
            {/* Topics */}
            <div className="w-full md:w-1/2 space-y-12">
              <div>
                <h3 className={`text-3xl font-medium ${montserrat.className} tracking-wider mb-2`}>Transformamos ideias<br/> em obras que marcam</h3>
              </div>

              <div className="space-x-12 md:space-y-12 flex md:flex-col">
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold tracking-wider mb-2">Nossos<br/> destaques</h3>
                  <p className="font-bold text-xs md:text-sm tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                    <ul>
                      <li>Soluções inovadoras</li>
                      <li>Tecnologia e durabilidade</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-2xl font-semibold tracking-wider mb-2">Nossa<br/> especialização</h3>
                  <p className="font-bold text-xs md:text-sm tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                    Esquadrias<br/>
                    de Alumínio<br/>
                    e Fachadas
                  </p>
                </div>
              </div>
              
            </div>

            {/* Extended Text */}
            <div className={`w-full ${montserrat.className} md:w-1/2`}>
              <div className="space-y-6">
                <p className="font-light text-base text-neutral-600 dark:text-neutral-400">
                  Desde 1987, a Tecnofeal constrói mais do que esquadrias: entrega soluções que moldam a arquitetura contemporânea com precisão, elegância e tecnologia de ponta. Atuamos lado a lado com os principais nomes da arquitetura e engenharia do país, imprimindo nossa assinatura em projetos que pedem mais do que estrutura — pedem identidade.
                </p>

                <p className="font-light text-base text-neutral-600 dark:text-neutral-400">
                  Com 37 anos de inovação contínua, somos referência nacional em esquadrias e fachadas especiais de alumínio, combinando design minimalista, performance técnica e personalização total.
                </p>

                <p className="font-semibold text-2xl pt-14 text-[#000000] dark:text-neutral-200">
                  Cada projeto é único. E cada entrega, um manifesto da nossa engenharia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 ">
        <Image src="/image/feal-produtos-pessoas.png" alt="TSA Logo" width={3000} height={1250} className="mr-2" />
      </div>
    </section>
  )
}
