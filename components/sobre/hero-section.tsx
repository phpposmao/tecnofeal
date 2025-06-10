"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir vídeo:", error)
      })
    }
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Vídeo de fundo */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/video/sobre/VIDEO-BANNER-SOBRE.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      
      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="flex justify-center items-center align-middle relative h-full w-full bg-black/30">
        <h2 className={`p-5 text-5xl  ${montserrat.className}`}><strong className="font-semibold">37 anos</strong> de uma trajetória<br/>marcada por excelência</h2>
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase font-light tracking-widest text-center max-w-4xl">
        </h1>
      </div>

      {/* Ícone de scroll para baixo */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
