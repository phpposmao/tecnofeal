// Dados dos produtos organizados por categoria
export const productCategories = [
  {
    id: 1,
    name: "Minimalista",
    slug: "minimalista",
    description: "Linha de produtos com design clean e linhas minimalistas",
  },
  {
    id: 2,
    name: "Conceito",
    slug: "conceito",
    description: "Produtos conceituais com tecnologia avançada",
  },
  {
    id: 3,
    name: "Premium",
    slug: "premium",
    description: "Linha premium com acabamentos de alta qualidade",
  },
]

export const products = [
  // Categoria Minimalista
  {
    id: 1,
    name: "FEAL SLIM GLASS 30",
    slug: "feal-slim-glass-30",
    category: "minimalista",
    categoryId: 1,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/feal-slim-30-hero.jpg",
    price: "R$ 2.850,00",
    description: "Esquadria Minimalista | Tecnologia Gomo e Fêmea",
    fullDescription:
      "A Feal Slim 30 é o desenvolvimento mais avançado que oferece uma exigente mais alta de desempenho, alta performance, permitindo uma maior entrada de luz natural com perfis extremamente finos e sistemas, com uma descrição específica.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "30mm x 120mm" },
      { label: "Espessura do vidro", value: "Até 28 mm" },
      { label: "Acabamentos disponíveis", value: "Anodizado fosco e brilhante" },
      { label: "Tipologias", value: "Correr | Fixo" },
      { label: "Complementos compatíveis", value: "Persiana entre vidros" },
      { label: "Sistema de trilhos", value: "Deslizante de alta suavidade" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 2,
    name: "FEAL SLIM GLASS 50",
    slug: "feal-slim-glass-50",
    category: "minimalista",
    categoryId: 1,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/feal-slim-50-hero.jpg",
    price: "R$ 3.200,00",
    description: "Esquadria Minimalista | Performance Superior",
    fullDescription:
      "A Feal Slim 50 oferece performance superior com perfis de 50mm, proporcionando maior resistência e isolamento térmico e acústico.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "50mm x 140mm" },
      { label: "Espessura do vidro", value: "Até 32 mm" },
      { label: "Acabamentos disponíveis", value: "Anodizado e pintado" },
      { label: "Tipologias", value: "Correr | Fixo | Basculante" },
      { label: "Complementos compatíveis", value: "Persiana integrada" },
      { label: "Sistema de trilhos", value: "Trilho duplo premium" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 3,
    name: "FEAL SLIM GLASS 60",
    slug: "feal-slim-glass-60",
    category: "minimalista",
    categoryId: 1,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/feal-slim-60-hero.jpg",
    price: "R$ 3.850,00",
    description: "Esquadria Minimalista | Máxima Performance",
    fullDescription:
      "A Feal Slim 60 representa o topo da linha minimalista, com perfis de 60mm oferecendo máxima performance térmica e acústica.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "60mm x 160mm" },
      { label: "Espessura do vidro", value: "Até 36 mm" },
      { label: "Acabamentos disponíveis", value: "Todos os acabamentos disponíveis" },
      { label: "Tipologias", value: "Todas as tipologias" },
      { label: "Complementos compatíveis", value: "Todos os complementos" },
      { label: "Sistema de trilhos", value: "Sistema premium avançado" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 4,
    name: "FEAL SLIM GLASS 70",
    slug: "feal-slim-glass-70",
    category: "minimalista",
    categoryId: 1,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/feal-slim-70-hero.jpg",
    price: "R$ 4.200,00",
    description: "Esquadria Minimalista | Edição Especial",
    fullDescription:
      "A Feal Slim 70 é nossa edição especial da linha minimalista, desenvolvida para projetos que exigem o máximo em design e performance.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "70mm x 180mm" },
      { label: "Espessura do vidro", value: "Até 40 mm" },
      { label: "Acabamentos disponíveis", value: "Acabamentos exclusivos" },
      { label: "Tipologias", value: "Personalizadas" },
      { label: "Complementos compatíveis", value: "Linha completa" },
      { label: "Sistema de trilhos", value: "Sistema exclusivo" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  // Categoria Conceito
  {
    id: 5,
    name: "CONCEITO FEAL SLIM 80",
    slug: "conceito-feal-slim-80",
    category: "conceito",
    categoryId: 2,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/conceito-80-hero.jpg",
    price: "R$ 4.850,00",
    description: "Linha Conceito | Inovação Tecnológica",
    fullDescription:
      "O Conceito Feal Slim 80 representa nossa mais avançada tecnologia em esquadrias, com sistemas inteligentes integrados.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "80mm x 200mm" },
      { label: "Espessura do vidro", value: "Até 44 mm" },
      { label: "Acabamentos disponíveis", value: "Tecnologia nano coating" },
      { label: "Tipologias", value: "Inteligentes" },
      { label: "Complementos compatíveis", value: "Automação integrada" },
      { label: "Sistema de trilhos", value: "Motorizado" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 6,
    name: "CONCEITO FEAL SLIM 100",
    slug: "conceito-feal-slim-100",
    category: "conceito",
    categoryId: 2,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/conceito-100-hero.jpg",
    price: "R$ 5.500,00",
    description: "Linha Conceito | Performance Extrema",
    fullDescription:
      "O Conceito Feal Slim 100 oferece performance extrema com tecnologia de ponta para projetos arquitetônicos únicos.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "100mm x 220mm" },
      { label: "Espessura do vidro", value: "Até 48 mm" },
      { label: "Acabamentos disponíveis", value: "Revestimentos especiais" },
      { label: "Tipologias", value: "Customizadas" },
      { label: "Complementos compatíveis", value: "Sistemas inteligentes" },
      { label: "Sistema de trilhos", value: "Alta tecnologia" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 7,
    name: "CONCEITO FEAL SLIM 120",
    slug: "conceito-feal-slim-120",
    category: "conceito",
    categoryId: 2,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/conceito-120-hero.jpg",
    price: "R$ 6.200,00",
    description: "Linha Conceito | Edição Limitada",
    fullDescription:
      "O Conceito Feal Slim 120 é nossa edição limitada, desenvolvida para projetos exclusivos que demandam soluções únicas.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "120mm x 240mm" },
      { label: "Espessura do vidro", value: "Até 52 mm" },
      { label: "Acabamentos disponíveis", value: "Exclusivos sob medida" },
      { label: "Tipologias", value: "Sob medida" },
      { label: "Complementos compatíveis", value: "Linha completa premium" },
      { label: "Sistema de trilhos", value: "Exclusivo" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 8,
    name: "CONCEITO FEAL SLIM 140",
    slug: "conceito-feal-slim-140",
    category: "conceito",
    categoryId: 2,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/conceito-140-hero.jpg",
    price: "R$ 7.000,00",
    description: "Linha Conceito | Vanguarda Tecnológica",
    fullDescription:
      "O Conceito Feal Slim 140 representa a vanguarda tecnológica em esquadrias, com recursos únicos no mercado.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "140mm x 260mm" },
      { label: "Espessura do vidro", value: "Até 56 mm" },
      { label: "Acabamentos disponíveis", value: "Nanotecnologia" },
      { label: "Tipologias", value: "Revolucionárias" },
      { label: "Complementos compatíveis", value: "Tecnologia avançada" },
      { label: "Sistema de trilhos", value: "Inovador" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  // Categoria Premium
  {
    id: 9,
    name: "PREMIUM ELITE 200",
    slug: "premium-elite-200",
    category: "premium",
    categoryId: 3,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/premium-200-hero.jpg",
    price: "R$ 8.500,00",
    description: "Linha Premium | Luxo e Sofisticação",
    fullDescription:
      "O Premium Elite 200 combina luxo e sofisticação com a mais alta tecnologia em esquadrias premium.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "200mm x 300mm" },
      { label: "Espessura do vidro", value: "Até 60 mm" },
      { label: "Acabamentos disponíveis", value: "Acabamentos de luxo" },
      { label: "Tipologias", value: "Premium personalizadas" },
      { label: "Complementos compatíveis", value: "Linha premium completa" },
      { label: "Sistema de trilhos", value: "Premium de luxo" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 10,
    name: "PREMIUM ELITE 250",
    slug: "premium-elite-250",
    category: "premium",
    categoryId: 3,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/premium-250-hero.jpg",
    price: "R$ 9.800,00",
    description: "Linha Premium | Exclusividade Máxima",
    fullDescription: "O Premium Elite 250 oferece exclusividade máxima com acabamentos únicos e tecnologia de ponta.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "250mm x 350mm" },
      { label: "Espessura do vidro", value: "Até 64 mm" },
      { label: "Acabamentos disponíveis", value: "Exclusivos premium" },
      { label: "Tipologias", value: "Sob medida exclusivas" },
      { label: "Complementos compatíveis", value: "Tecnologia premium" },
      { label: "Sistema de trilhos", value: "Exclusivo premium" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 11,
    name: "PREMIUM ELITE 300",
    slug: "premium-elite-300",
    category: "premium",
    categoryId: 3,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/premium-300-hero.jpg",
    price: "R$ 11.500,00",
    description: "Linha Premium | Obra de Arte",
    fullDescription:
      "O Premium Elite 300 é uma verdadeira obra de arte em esquadrias, desenvolvido para projetos únicos e exclusivos.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "300mm x 400mm" },
      { label: "Espessura do vidro", value: "Até 68 mm" },
      { label: "Acabamentos disponíveis", value: "Artísticos exclusivos" },
      { label: "Tipologias", value: "Obras de arte" },
      { label: "Complementos compatíveis", value: "Arte e tecnologia" },
      { label: "Sistema de trilhos", value: "Obra de arte" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
  {
    id: 12,
    name: "PREMIUM ELITE 350",
    slug: "premium-elite-350",
    category: "premium",
    categoryId: 3,
    image: "/image/produtos/produtos-placeholder.png",
    heroImage: "/images/products/premium-350-hero.jpg",
    price: "R$ 13.200,00",
    description: "Linha Premium | Coleção Limitada",
    fullDescription:
      "O Premium Elite 350 é nossa coleção limitada, representando o ápice da engenharia e design em esquadrias.",
    technicalDetails: [
      { label: "Dimensões (Vista x profundidade)", value: "350mm x 450mm" },
      { label: "Espessura do vidro", value: "Até 72 mm" },
      { label: "Acabamentos disponíveis", value: "Coleção limitada" },
      { label: "Tipologias", value: "Únicas no mundo" },
      { label: "Complementos compatíveis", value: "Exclusivos limitados" },
      { label: "Sistema de trilhos", value: "Coleção limitada" },
    ],
    openingTypes: [
      { name: "2 folhas", image: "/image/produtos/duasfolhas.png" },
      { name: "3 folhas", image: "/image/produtos/tresfolhas.png" },
      { name: "4 folhas", image: "/image/produtos/quatrofolhas.png" },
      { name: "2 folhas com persiana integrada", image: "/image/produtos/ultimo.png" },
    ],
  },
]

// Função para obter produtos por categoria
export const getProductsByCategory = (categorySlug: string) => {
  return products.filter((product) => product.category === categorySlug)
}

// Função para obter produto por slug
export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug)
}

// Função para obter categoria por slug
export const getCategoryBySlug = (slug: string) => {
  return productCategories.find((category) => category.slug === slug)
}
