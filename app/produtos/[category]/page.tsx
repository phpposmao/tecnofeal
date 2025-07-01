import { notFound } from "next/navigation"
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products"
import CategoryHeroSection from "@/components/produtos/category-hero-section"
import CategoryProductsSection from "@/components/produtos/category-products-section"

interface CategoryPageProps {
  params: {
    category: string
  }
  searchParams: {
    produto?: string
  }
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category)
  const products = getProductsByCategory(params.category)

  if (!category || products.length === 0) {
    notFound()
  }

  // Se não há produto especificado, usa o primeiro da categoria
  const selectedProductSlug = searchParams.produto || products[0].slug
  const selectedProduct = products.find((p) => p.slug === selectedProductSlug) || products[0]

  return (
    <main className="bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <CategoryHeroSection category={category} selectedProduct={selectedProduct} />
      <CategoryProductsSection category={category} products={products} selectedProduct={selectedProduct} />
    </main>
  )
}
