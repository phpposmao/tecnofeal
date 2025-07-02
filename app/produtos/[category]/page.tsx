import { notFound } from "next/navigation"
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products"
import CategoryHeroSection from "@/components/produtos/category-hero-section"
import CategoryProductsSection from "@/components/produtos/category-products-section"

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
  searchParams: Promise<{
    produto?: string
  }>
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const { produto } = await searchParams

  const category = getCategoryBySlug(categorySlug)
  const products = getProductsByCategory(categorySlug)

  if (!category || products.length === 0) {
    notFound()
  }

  // Se não há produto especificado, usa o primeiro da categoria
  const selectedProductSlug = produto || products[0].slug
  const selectedProduct = products.find((p) => p.slug === selectedProductSlug) || products[0]

  return (
    <>
      <CategoryHeroSection category={category} selectedProduct={selectedProduct} />
      <CategoryProductsSection category={category} products={products} selectedProduct={selectedProduct} />
    </>
  )
}