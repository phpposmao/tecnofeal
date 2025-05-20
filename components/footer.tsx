import Link from "next/link"
import { Mail } from "lucide-react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Conteúdo com largura máxima de 1140px */}
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className={montserrat.className}>
              <address className="not-italic font-light">
                <p className="mb-2">(11) 99255-1768</p>
                <p className="mb-2">(11) 3082-0322</p>
                <p className="mb-2">email@tecnofeal.com.br</p>
                <p>@tecnofeal</p>
              </address>
            </div>

            {/* Navigation */}
            <div>
              <nav>
                <ul className="space-y-3 font-light">
                  <li>
                    <Link href="/" className="hover:underline uppercase tracking-widest">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/projetos" className="hover:underline uppercase tracking-widest">
                      Projetos
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicos" className="hover:underline uppercase tracking-widest">
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link href="/sobre" className="hover:underline uppercase tracking-widest">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="/noticias" className="hover:underline uppercase tracking-widest">
                      Notícias
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato" className="hover:underline uppercase tracking-widest">
                      Contato
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-light uppercase tracking-wider mb-6">Newsletter</h3>
              <p className={`font-light ${montserrat.className} mb-4`}>Inscreva-se para receber novidades, projetos e inspirações.</p>
              <form className={`space-y-4 ${montserrat.className}`}>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none mb-3"
                  required
                />
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-primary hover:bg-white/90 transition-colors"
                    aria-label="Inscrever-se"
                  >
                    <Mail size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20 text-center font-light text-sm">
            <p>&copy; {new Date().getFullYear()} Tecnofeal. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
