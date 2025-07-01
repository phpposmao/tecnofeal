"use client"

import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Category {
  id: number
  name: string
  slug: string
}

interface Product {
  id: number
  name: string
  slug: string
  image: string
  fullDescription: string
  price: string
  description: string
  technicalDetails: Array<{
    label: string
    value: string
  }>
  openingTypes: Array<{
    name: string
    image: string
  }>
}

interface CategoryProductsSectionProps {
  category: Category
  products: Product[]
  selectedProduct: Product
}

export default function CategoryProductsSection({ category, products, selectedProduct }: CategoryProductsSectionProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleProductSelect = (productSlug: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("produto", productSlug)
    router.push(`/produtos/${category.slug}?${params.toString()}`)
  }

  return (
    <>
      {/* Product Selector */}
      <section className="py-8 bg-black text-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-1">
              {products.map((product, index) => (
                <div key={product.id} className="md:flex items-center">
                  <button
                    onClick={() => handleProductSelect(product.slug)}
                    className={`px-2 md:px-6 py-3 text-sm font-light uppercase tracking-wider transition-all duration-300 ${
                      selectedProduct.slug === product.slug
                        ? "text-white underline"
                        : "text-neutral-400 hover:underline"
                    }`}
                  >
                    {product.name}
                  </button>
                  {index < products.length - 1 && <div className="w-1 h-1 bg-neutral-600 rounded-full mx-2"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-4">
          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Text Content */}
            <div className="space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="text-4xl font-medium uppercase tracking-wider mb-4">{selectedProduct.name}</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-500 font-medium mb-4">
                  Categoria: Minimalista | Tipologia: Correr e Fixo
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-wider mb-4">
                  Transparência que valoriza o essencial
                </h3>
                <p className="font-light text-neutral-600 dark:text-neutral-400 mb-6">
                  {selectedProduct.fullDescription}
                </p>
                <p className="font-light text-neutral-600 dark:text-neutral-400 mb-4">
                  Suas linhas específicas são um diferencial integrado, sendo a combinação com outros sistemas,
                  permitindo uma maior entrada de luz natural com perfis extremamente finos e sistemas, com uma
                  descrição específica.
                </p>
              </div>

              <div className="pt-4">
                <Button>Solicitar Orçamento</Button>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative h-[600px]">
              <Image
                src="/image/produtos/esquadria-produtos.png"
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#d9d9d9] text-[#111111]">
          {/* Opening Types */}
          <div className="max-w-[1140px] mx-auto px-4 p-12">
            <h3 className="text-xl font-bold uppercase tracking-wider text-center mb-12">Tipos de Abertura</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {selectedProduct.openingTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-32 mb-4">
                    <Image src={type.image || "/placeholder.svg"} alt={type.name} fill className="object-contain" />
                  </div>
                  <p className="text-sm font-medium lowercase tracking-wider">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section className="py-24">
        <div className="md:flex max-w-[1140px] mx-auto px-4">
        {/* Extended Text */}
        <div className={`w-full md:w-1/2 pb-5 md:pr-12`}>
          <div className="relative h-[450px]">
              <Image
                src="/image/produtos/indicacoes-grande.png"
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
          </div>
        </div>

        {/* Extended Text */}
        <div className={`w-full md:w-1/2 pl-8 md:pl-12 pr-8 md:pr-10 flex flex-col justify-center`}>
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-1">Indicações de Uso</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-500 font-medium mb-4">
              Projetos residenciais que priorizam:
            </p>
          </div>
          <div className="space-y-6">
            <div className="relative pl-20 p-3 md:p-5 flex justify-start border-[#383838] border-2">
              <Image src="/image/produtos/indicacoes-icon1.png" alt="Projetos Sociais" width={80} height={80} className="absolute inset-x-0 inset-y-0"/>
              <p className="pl-10 text-sm">Estética minimalista com visual contínuo</p>
            </div>
            <div className="relative pl-20 p-3 md:p-5 flex justify-start border-[#383838] border-2">
              <Image src="/image/produtos/indicacoes-icon2.png" alt="Projetos Sociais" width={80} height={80} className="absolute inset-x-0 inset-y-0"/>
              <p className="pl-10 text-sm">Vãos médios com vista privilegiada</p>
            </div>
            <div className="relative pl-20 p-3 md:p-5 flex justify-start border-[#383838] border-2">
              <Image src="/image/produtos/indicacoes-icon3.png" alt="Projetos Sociais" width={80} height={80} className="absolute inset-x-0 inset-y-0"/>
              <p className="pl-10 text-sm">Ambientes integrados com ventilação cruzada</p>
            </div>
            <div className="relative pl-20 p-3 md:p-5 flex justify-start border-[#383838] border-2">
              <Image src="/image/produtos/indicacoes-icon4.png" alt="Projetos Sociais" width={80} height={80} className="absolute inset-x-0 inset-y-0"/>
              <p className="pl-10 text-sm">Ideal em ambientes com paisagismo externo</p>
            </div>
          </div>
        </div>
        </div>
        
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-black text-white text-center md:text-left">
        <div className="max-w-[1140px] mx-auto px-4">
          {/* Technical Details */}
          <div className="">
            <h3 className="text-2xl font-light uppercase tracking-wider mb-12">Detalhes Técnicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedProduct.technicalDetails.map((detail, index) => (
                <div key={index}>
                  <h4 className="text-base font-semibold tracking-wider mb-2">{detail.label}</h4>
                  <p className="text-neutral-300 text-sm font-light">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 ">
        <div className="max-w-[1140px] mx-auto px-4">
          {/* Exclusive Components */}
          <div className="">
            <h3 className="text-2xl font-light uppercase tracking-wider text-center mb-12">
              Componentes Exclusivos Tecnofeal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative pl-20 p-5 md:p-2 flex justify-start items-center">
                <Image src="/image/produtos/componentes-icon1.png" alt="Projetos Sociais" width={80} height={80} className="absolute inset-x-0 inset-y-0"/>
                <p className="pl-6 font-medium text-xs">Roldanas com rolamento inox blindado, que garantem suavidade ao abrir e fechar</p>
              </div>
              <div className="relative pl-20 p-5 md:p-0 flex justify-start items-center">
                <Image src="/image/produtos/componentes-icon2.png" alt="Projetos Sociais" width={80} height={80} className="absolute inset-x-0 inset-y-0"/>
                <p className="pl-6 font-medium text-xs">Compatibilidade com acessórios personalizados e projetos sob medida</p>
              </div>
              <div className="relative pl-20 p-5 md:p-0 flex justify-start items-center">
                <Image src="/image/produtos/componentes-icon3.png" alt="Projetos Sociais" width={80} height={80} className="absolute inset-x-0 inset-y-0"/>
                <p className="pl-6 font-medium text-xs">Gaxetas técnicas que contribuem para isolamento termoacústico</p>
              </div>
              <div className="relative pl-20 p-5 md:p-0 flex justify-start items-center">
                <Image src="/image/produtos/componentes-icon4.png" alt="Projetos Sociais" width={80} height={80} className="absolute inset-x-0 inset-y-0"/>
                <p className="pl-6 font-medium text-xs">Integração com acabamentos sob medida e outros sistemas FEAL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#d9d9d9] text-black">
        {/* Integration */}
        <div className="max-w-[1140px] mx-auto px-4 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-semibold uppercase tracking-wider mb-8">Integra Com:</h3>
            </div>
            <div>
              <p className="text-sm font-regular tracking-wider mb-2">Sistema {selectedProduct.name}<br/> para continuidade estética</p>
            </div>
            <div>
              <p className="text-sm font-regular tracking-wider mb-2">Complementos como pinázios, ripados ou muxarabis, mantendo linguagem arquitetônica</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
