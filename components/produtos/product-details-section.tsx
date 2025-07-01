import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  image: string
  fullDescription: string
  price: string
  description: string
  openingTypes: Array<{
    name: string
    image: string
  }>
}

interface ProductDetailsSectionProps {
  product: Product
}

export default function ProductDetailsSection({ product }: ProductDetailsSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-pink-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-light uppercase tracking-wider mb-4">{product.name}</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light mb-6">{product.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-light uppercase tracking-wider mb-4">
                Transparência que valoriza o essencial
              </h3>
              <p className="font-light text-neutral-600 dark:text-neutral-400 mb-6">{product.fullDescription}</p>
              <p className="font-light text-neutral-600 dark:text-neutral-400 mb-6">
                Suas linhas específicas são um diferencial integrado, sendo a combinação com outros sistemas, permitindo
                uma maior entrada de luz natural com perfis extremamente finos e sistemas, com uma descrição específica.
              </p>
            </div>

            <div className="pt-6">
              <Button>Solicitar Orçamento</Button>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative h-[600px]">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </div>

        {/* Opening Types */}
        <div className="bg-white dark:bg-neutral-800 p-12 rounded-lg">
          <h3 className="text-2xl font-light uppercase tracking-wider text-center mb-12">Tipos de Abertura</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {product.openingTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="relative h-32 mb-4">
                  <Image src={type.image || "/placeholder.svg"} alt={type.name} fill className="object-contain" />
                </div>
                <p className="text-sm font-light uppercase tracking-wider">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
