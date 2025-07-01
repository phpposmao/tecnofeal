import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Product {
  id: number
  name: string
  slug: string
  heroImage: string
  category: string
}

interface ProductHeroSectionProps {
  product: Product
}

export default function ProductHeroSection({ product }: ProductHeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image src={product.heroImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>

      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Breadcrumb */}
      <div className="absolute top-24 left-0 right-0 z-10">
        <div className="max-w-[1140px] mx-auto px-4">
          <nav className="flex items-center space-x-2 text-white text-sm font-light">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight size={16} />
            <Link href="/produtos" className="hover:underline">
              Produtos
            </Link>
            <ChevronRight size={16} />
            <span className="capitalize">{product.category}</span>
            <ChevronRight size={16} />
            <span>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative h-full flex flex-col items-center justify-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-light tracking-widest text-center">
          {product.name}
        </h1>
      </div>
    </section>
  )
}
