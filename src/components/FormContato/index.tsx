export default function FormContato() {
    return (
        <section className="relative py-8 sm:py-16">
            <div className="flex-col mx-auto w-11/12 lg:w-9/12">
                <strong className="titulo-fundo-direita">contato</strong>
                <div className="titulo text-center lg:text-left">
                    <h2>Entre em Contato</h2>
                </div>
                
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Informações de Contato */}
                    <div className="text-white text-base sm:text-lg space-y-2 sm:space-y-4 text-center lg:text-left">
                        <p>(11) 99255-1768</p>
                        <p>(11) 3082-0322</p>
                        <p>email@tecnofeal.com.br</p>
                        <p>@tecnofeal</p>
                    </div>

                    {/* Formulário */}
                    <div className="lg:col-span-3 p-4 sm:p-6">
                        <form action="" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Coluna Nome e Email */}
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Nome*"
                                    className="w-full bg-alternative-dark-grey text-white rounded-md p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Email*"
                                    className="w-full bg-alternative-dark-grey text-white rounded-md p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                />
                            </div>

                            {/* Coluna Telefone e Empresa */}
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Telefone"
                                    className="w-full bg-alternative-dark-grey text-white rounded-md p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Empresa"
                                    className="w-full bg-alternative-dark-grey text-white rounded-md p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                />
                            </div>

                            {/* Coluna Mensagem */}
                            <div className="sm:col-span-2">
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="Mensagem*"
                                    className="w-full h-32 sm:h-full bg-alternative-dark-grey text-white rounded-md p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                ></textarea>
                            </div>

                            {/* Botão de Envio */}
                            <div className="sm:col-span-2 text-center lg:text-right">
                                <button
                                    type="submit"
                                    className="btn btn-shadow-2 rounded-full px-6 py-2"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}