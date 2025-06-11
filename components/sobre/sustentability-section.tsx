"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Montserrat } from "next/font/google"
import AOS from "aos"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function SustentabilitySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animar todos os elementos com suas respectivas classes
            const animatedElements = entry.target.querySelectorAll(
              ".fade-down, .fade-left, .fade-right, .scale-up, .slide-up",
            )

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
    <section ref={sectionRef} className="bg-background flex flex-col">
      <div className="relative h-[540px] w-full overflow-hidden">
        <Image src="/image/sobre/sustentabilidade.png" alt="TSA Logo" fill className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="text-center md:text-left container mx-auto px-4 md:mt-20 pb-20">
        {/* Conteúdo com largura máxima de 1140px */}
        <div className="max-w-[1040px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Extended Text */}
            <div className={`w-full ${montserrat.className} md:w-1/2 pr-12`}>
              <div className="space-y-6">
                <p className="font-regular text-2xl text-neutral-800 dark:text-neutral-100">
                  Sustentabilidade e<br/> responsabilidade social
                </p>

                <p className="font-medium text-sm pt-10 text-neutral-800 dark:text-neutral-100">
                  Comprometida com o futuro, a Tecnofeal adota práticas sustentáveis em todo o processo produtivo. Utilizamos alumínio — material 100% reciclável — e implementamos rotinas rigorosas de separação e descarte de resíduos, com rastreabilidade certificada.
                </p>

                <p className="font-regular text-2xl pt-10 text-neutral-800 dark:text-neutral-100 animate-fadeIn slide-up delay-200">
                  Nossas ações incluem:
                </p>
              </div>
            </div>

            {/* Extended Text */}
            <div className={`w-full ${montserrat.className} md:w-1/2 pl-12 pr-10 animate-fadeIn`}>
              <div className="space-y-6">
                <div className="relative pl-20 p-5 flex justify-start border-neutral-400 border-2 fade-left.appear delay-300">
                  <Image src="/image/sobre/reciclagem.png" alt="Projetos Sociais" width={80} height={80} className="absolute -inset-x-10 inset-y-2"/>
                  <p>Reciclagem de sucatas com<br/> reinvestimento interno</p>
                </div>
                <div className="relative pl-20 p-5 flex justify-start border-neutral-400 border-2 fade-left delay-400">
                  <Image src="/image/sobre/reaproveitamento.png" alt="Projetos Sociais" width={80} height={80} className="absolute -inset-x-10 inset-y-2"/>
                  <p>Reaproveitamento de água<br/> em testes de fachada</p>
                </div>
                <div className="relative pl-20 p-5 flex justify-start border-neutral-400 border-2 fade-left delay-500">
                  <Image src="/image/sobre/treinamentos.png" alt="Projetos Sociais" width={80} height={80} className="absolute -inset-x-10 inset-y-2"/>
                  <p>Treinamentos contínuos para<br/> boas práticas ambientais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 text-center md:text-left bg-white">
        <div className="p-10 md:p-0 md:flex gap-12 max-w-[1040px] mx-auto py-10 animate-fadeIn">
          <div className={`w-full ${montserrat.className} md:w-1/2 md:pr-12 pb-5 md:pb-0 flex justify-center items-center slide-up delay-600`}>
            <p className="text-black text-sm font-medium">Além disso, apoiamos projetos sociais voltados para a infância e contribuímos com iniciativas de tratamento de crianças e adolescentes com câncer. Sustentabilidade e responsabilidade social, para nós, é mais do que uma diretriz: é parte essencial daquilo que construímos.</p>
          </div>
          <div className={`w-full ${montserrat.className} md:w-1/2`}>
            <Image src="/image/sobre/responsa-social.png" alt="Projetos Sociais" width={400} height={100} className="object-cover"/>
          </div>
        </div>
      </div>
      
    </section>
  )
}
