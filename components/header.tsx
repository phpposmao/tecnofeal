"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Link href="/" className="flex items-center">
          {theme === "dark" ?<Image src="/image/logo-tecnofeal-nuevo.png" alt="Tecnofeal Logo" width={120} height={30} className="mr-2" /> : <Image src="/image/logo-tecnofeal-nuevo.png" alt="Tecnofeal Logo" width={120} height={30} className="mr-2" />}
        </Link>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Expandable Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-black z-50 transform transition-transform duration-500 w-full md:w-1/3 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto h-full flex flex-col p-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center">
            <ul className="space-y-6 text-center">
              <li>
                <Link
                  href="/"
                  className="text-3xl font-light uppercase tracking-widest hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projetos"
                  className="text-3xl font-light uppercase tracking-widest hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-3xl font-light uppercase tracking-widest hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-3xl font-light uppercase tracking-widest hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-3xl font-light uppercase tracking-widest hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-3xl font-light uppercase tracking-widest hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <div className="text-center">
              <p className="font-light mb-2">email@tecnofeal.com.br</p>
              <p className="font-light mb-2">(11) 99255-1768</p>
              <p className="font-light uppercase tracking-widest">Obras que Marcam</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
