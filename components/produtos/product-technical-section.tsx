interface Product {
  technicalDetails: Array<{
    label: string
    value: string
  }>
}

interface ProductTechnicalSectionProps {
  product: Product
}

export default function ProductTechnicalSection({ product }: ProductTechnicalSectionProps) {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Technical Details */}
        <div className="mb-24">
          <h3 className="text-2xl font-light uppercase tracking-wider mb-12">Detalhes Técnicos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.technicalDetails.map((detail, index) => (
              <div key={index}>
                <h4 className="text-lg font-light uppercase tracking-wider mb-2">{detail.label}</h4>
                <p className="text-neutral-300 font-light">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Section */}
        <div className="bg-gradient-to-b from-pink-50 to-pink-100 dark:from-neutral-800 dark:to-neutral-700 p-12 rounded-lg mb-24">
          <h3 className="text-2xl font-light uppercase tracking-wider text-center mb-12 text-neutral-900 dark:text-white">
            Performance Comprovada
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-light uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">
                Resistência estrutural | Carga de vento
              </h4>
              <div className="bg-green-500 h-2 rounded-full mb-2"></div>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">Excelente performance</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-light uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">
                Durabilidade | Carga de vento
              </h4>
              <div className="bg-green-500 h-2 rounded-full mb-2"></div>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">Performance superior</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-light uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">
                Acústica | 1000 ciclos
              </h4>
              <div className="bg-yellow-500 h-2 rounded-full mb-2"></div>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">Boa performance</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-light uppercase tracking-wider mb-4 text-neutral-900 dark:text-white">
                Segurança | Carga de vento
              </h4>
              <div className="bg-green-500 h-2 rounded-full mb-2"></div>
              <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">Máxima segurança</p>
            </div>
          </div>
        </div>

        {/* Exclusive Components */}
        <div className="mb-24">
          <h3 className="text-2xl font-light uppercase tracking-wider text-center mb-12">
            Componentes Exclusivos Tecnofeal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-700 rounded-full mx-auto mb-4"></div>
              <h4 className="text-sm font-light uppercase tracking-wider mb-2">Vedação exclusiva</h4>
              <p className="text-xs text-neutral-400 font-light">Tecnologia patenteada para máxima vedação</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-700 rounded-full mx-auto mb-4"></div>
              <h4 className="text-sm font-light uppercase tracking-wider mb-2">Ferragem premium</h4>
              <p className="text-xs text-neutral-400 font-light">Componentes com acabamento especial</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-700 rounded-full mx-auto mb-4"></div>
              <h4 className="text-sm font-light uppercase tracking-wider mb-2">Sistema de drenagem</h4>
              <p className="text-xs text-neutral-400 font-light">Drenagem eficiente integrada</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-700 rounded-full mx-auto mb-4"></div>
              <h4 className="text-sm font-light uppercase tracking-wider mb-2">Isolamento térmico</h4>
              <p className="text-xs text-neutral-400 font-light">Máxima eficiência energética</p>
            </div>
          </div>
        </div>

        {/* Integration */}
        <div>
          <h3 className="text-2xl font-light uppercase tracking-wider mb-8">Integra Com:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-light uppercase tracking-wider mb-2">Sistema Feal Slim Glass 30</h4>
              <p className="text-neutral-400 font-light text-sm">
                Compatível com toda a linha para projetos integrados
              </p>
            </div>
            <div>
              <h4 className="text-lg font-light uppercase tracking-wider mb-2">Complementos como persiana</h4>
              <p className="text-neutral-400 font-light text-sm">Sistema de persianas integradas disponível</p>
            </div>
            <div>
              <h4 className="text-lg font-light uppercase tracking-wider mb-2">Automação residencial</h4>
              <p className="text-neutral-400 font-light text-sm">Compatível com sistemas de automação modernos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
