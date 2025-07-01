import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Category {
  id: number
  name: string
  slug: string
}

interface Product {
  id: number
  name: string
  slug: string
  heroImage: string
  category: string
}

interface CategoryHeroSectionProps {
  category: Category
  selectedProduct: Product
}

export default function CategoryHeroSection({ category, selectedProduct }: CategoryHeroSectionProps) {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src={"/image/produtos/bg-minimalista.png"}
          alt={selectedProduct.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo centralizado */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase font-medium tracking-widest text-center">
          {selectedProduct.category}
        </h1>
      </div>
    </section>
  )
}
