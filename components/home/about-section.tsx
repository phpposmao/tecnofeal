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
      <div>
        <Image src="/image/feal-produtos-pessoas.png" alt="TSA Logo" width={3000} height={1250} className="mr-2" />
      </div>
      <div className="container mx-auto px-4 pt-12">
        <h2 className="section-title text-center mb-16">Sobre a Tecnofeal</h2>

        {/* Conteúdo com largura máxima de 1140px */}
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Topics */}
            <div className="w-full md:w-1/2 space-y-12">
              <div>
                <h3 className={`text-3xl font-medium ${montserrat.className} tracking-wider mb-2`}>Transformamos ideias<br/> em obras que marcam</h3>
              </div>

              <div>
                <h3 className="text-2xl font-regular tracking-wider mb-2">Nossos<br/> destaques</h3>
                <p className="font-light text-xl tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                  Soluções inovadoras<br/>
                  Tecnologia e durabilidade
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-regular tracking-wider mb-2">Nossa<br/> Especialização</h3>
                <p className="font-light text-xl tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                  Esquadrias<br/>
                  de Alumínio<br/>
                  e Fachadas
                </p>
              </div>
            </div>

            {/* Extended Text */}
            <div className={`w-full ${montserrat.className} md:w-1/2`}>
              <div className="space-y-6">
                <p className="font-light text-lg text-neutral-600 dark:text-neutral-400">
                  Com 37 anos de trajetória marcada pela inovação, a Tecnofeal é referência em esquadrias e fachadas personalizadas de alumínio. Somos especialistas em criar soluções que aliam sofisticação, funcionalidade e tecnologia, permitindo aplicações às mais diversas tipologias e necessidades do mercado.
                </p>

                <p className="font-light text-lg text-neutral-600 dark:text-neutral-400">
                  Nossas linhas exclusivas conectam tendência e identidade, transformando cada projeto em uma experiência única. Mais do que fornecer produtos, unimos design e rigor técnico, garantindo que cada obra se torne uma marca registrada de excelência e estilo.
                </p>

                <p className="font-light text-lg text-neutral-600 dark:text-neutral-400">
                  Descubra como nossas soluções em alumínio podem transformar seu projeto.
                </p>

                <div className="pt-6">
                  <Link href="/sobre">
                    <Button>+ Sobre Nós</Button>
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
