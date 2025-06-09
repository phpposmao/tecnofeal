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

export default function FactorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir vídeo:", error)
      })
    }
  }, [])

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
    <section ref={sectionRef} className="bg-background relative fade-up flex flex-col">
      <video ref={videoRef} className="inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/video/sobre/VIDEO-TRABALHADORES.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      <div className="container text-center md:text-left mx-auto px-4 mt-20">
        {/* Conteúdo com largura máxima de 1140px */}
        <div className="max-w-[1040px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Extended Text */}
            <div className={`w-full ${montserrat.className} md:w-1/2 px-8 md:pr-12`}>
              <div className="space-y-6">
                <p className="font-regular text-2xl text-neutral-800 dark:text-neutral-100">
                  <strong className="font-semibold">Fábrica:</strong> tecnologia,<br/> precisão e autonomia
                </p>

                <p className="font-medium text-sm text-neutral-800 dark:text-neutral-100">
                  Nosso parque fabril, com mais de 4.000 m² de área própria em Diadema (SP), é um dos pilares da nossa qualidade. Nele, cada esquadria é produzida sob rigorosos padrões de engenharia, com tecnologia de ponta e processos automatizados que garantem precisão milimétrica — da usinagem à montagem final.
                </p>

                <p className="font-medium text-sm text-neutral-800 dark:text-neutral-100">
                  Equipamentos de última geração, como centros de usinagem 3D da Elumatec e câmaras de teste próprias, somam-se a uma equipe altamente qualificada. Produzimos internamente, controlamos cada etapa e entregamos com excelência comprovada em obras de alta complexidade.
                </p>
              </div>
            </div>

            <div className="w-0 md:w-[2px] h-0 md:h-96 bg-neutral-400 dark:bg-neutral-700 md:mb-24"></div>

            {/* Extended Text */}
            <div className={`w-full ${montserrat.className} md:w-1/2 px-8 md:pl-12 md:pr-10`}>
              <div className="space-y-6">
                <p className="font-regular text-2xl text-neutral-800 dark:text-neutral-100">
                  <strong className="font-semibold">Instalação própria:</strong> garantia<br/> do primeiro ao último detalhe
                </p>

                <p className="font-medium text-sm text-neutral-800 dark:text-neutral-100">
                  Projetos de alto padrão exigem execução à altura. Por isso, a Tecnofeal conta com equipe própria de instalação, composta por técnicos treinados para atender aos desafios mais exigentes da arquitetura contemporânea.
                </p>

                <p className="font-medium text-sm text-neutral-800 dark:text-neutral-100">
                  Capacitados para operar sistemas exclusivos, realizar içamentos com folhas superiores a 500 kg e garantir o acabamento perfeito em fachadas complexas, nossos instaladores são uma extensão da engenharia da marca. O resultado? Precisão na instalação, segurança no processo e total controle de qualidade do início ao fim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
