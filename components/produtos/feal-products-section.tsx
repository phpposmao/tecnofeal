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

export default function FealProductsSection() {
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
    <section ref={sectionRef} className="py-8 bg-background fade-up">
      <div className="container mx-auto px-4">
        {/* Conteúdo com largura máxima de 1140px */}
        <div className="max-w-[1040px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative flex-1 justify-between">
                <Image src="/image/produtos/feal-produtos.png" alt="Nossos produtos" width={400} height={40} className="object-cover" />
                <p className="text-2xl pr-20 mt-20">
                  Esquadrias <strong>arquitetônicas</strong>, sistemas <strong>inteligentes</strong> e complementos que <strong>potencializam a estética e a performance</strong> do seu projeto.
                </p>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="space-y-6 text-base">
                <p className={`font-light text-neutral-600 ${montserrat.className} dark:text-neutral-400`}>
                  A FEAL Produtos traduz exclusividade, inovação e excelência técnica em sistemas de esquadrias e fachadas de alumínio.                 
                </p>

                <p className={`font-light text-neutral-600 ${montserrat.className} dark:text-neutral-400`}>
                  Desenvolvidas para atender às exigências de projetos residenciais e corporativos de alto desempenho e complexidade, nossas linhas unem design, precisão construtiva e versatilidade funcional.
                </p>

                <p className={`font-light text-neutral-600 ${montserrat.className} dark:text-neutral-400`}>
                  Mais do que esquadrias, entregamos soluções integradas, com acabamentos sofisticados, opções de personalização e complementos que valorizam a experiência estética e técnica da obra.
                </p>

                <p className={`font-light text-neutral-600 ${montserrat.className} dark:text-neutral-400`}>
                  Cada perfil, cada acessório, cada detalhe é pensado para dialogar com a arquitetura contemporânea – do conceito à execução.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Link href="/contato">
                    <Button>Solicitar Orçamento</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
