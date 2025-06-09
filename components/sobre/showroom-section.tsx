"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function ShowroomSection() {
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
    <section ref={sectionRef} className="fade-up bg-[#d9d9d9]">
      <div className="text-center md:text-left py-12 md:py-24 container mx-auto md:px-4">
        {/* Conteúdo com largura máxima de 1140px */}
        <div className="max-w-[1040px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="space-y-6 text-base md:pr-12">
                <h2 className={`font-medium text-2xl text-[#000000] ${montserrat.className}`}>
                  <strong className="font-semibold">Showroom</strong>: o ponto de encontro<br/> entre projeto e realidade
                </h2>

                <p className={`font-medium text-sm text-[#000000] ${montserrat.className}`}>
                  Na alameda mais prestigiada do design em São Paulo, nosso showroom é mais do que uma vitrine: é um espaço de imersão técnica e sensorial. Instalado na Alameda Gabriel Monteiro da Silva, ele oferece a experiência de conhecer nossas soluções em escala real, permitindo testes, visualizações e experimentações que aproximam a arquitetura da execução.
                </p>

                <p className={`font-medium text-sm text-[#000000] ${montserrat.className}`}>
                  Aqui, arquitetos, engenheiros e clientes são recebidos por especialistas prontos para analisar cada detalhe do seu projeto — da escolha do sistema à definição dos acabamentos. Um ambiente onde inovação, atendimento exclusivo e alto padrão convergem em cada escolha.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative flex">
                <Image src="/image/sobre/showroom-image.png" alt="Nossos produtos" width={800} height={40} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call-to-Action Banner */}
      <div className="bg-[#2b2b2b] dark:bg-[#2b2b2b] py-6">
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
