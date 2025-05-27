import HeroSection from "@/components/home/hero-section"
import ProjectsSection from "@/components/home/projects-section"
import ServicesSection from "@/components/home/services-section"
import AboutSection from "@/components/home/about-section"
import ProductsSection from "@/components/home/products-section"
import NewsSection from "@/components/home/news-section"
import ProjectsSlider from "@/components/home/projects-slider"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSlider />
      <ServicesSection />
      <AboutSection />
      <ProductsSection />
      <NewsSection />
    </>
  )
}
