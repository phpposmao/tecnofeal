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

export default function ProductsSection() {
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
    <section ref={sectionRef} className="py-24 bg-background fade-up">
      <div className="container mx-auto px-4">
        {/* Divider Line */}
        <div className="w-full h-px bg-neutral-300 dark:bg-neutral-700 mb-24"></div>

        {/* Conteúdo com largura máxima de 1140px */}
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative h-[500px]">
                <Image src="/image/logo-feal-produtos.png" alt="Nossos produtos" fill className="object-cover" />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="space-y-6 text-lg">
                <p className={`font-light text-neutral-600 ${montserrat.className} dark:text-neutral-400`}>
                  A FEAL Produtos traduz exclusividade e inovação em sistemas de esquadrias e fachadas para projetos residenciais e corporativos que transcendem o comum.
                </p>

                <p className={`font-light text-neutral-600 ${montserrat.className} dark:text-neutral-400`}>
                  Nossas linhas são design, precisão e funcionalidade em perfeita harmonia com a arquitetura contemporânea.<br/>
                  Complementos refinados e acessórios selecionados compõem um sistema que é sinônimo de elegância, performance e sofisticação.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Link href="/produtos">
                    <Button>+ Produtos</Button>
                  </Link>
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
