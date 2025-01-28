import Image from "next/image";

import Logo from "~/image/logos/logo-horizontal.png"
import EmailSvg from "@/components/svgs/Email";
import FacebookSvg from "@/components/svgs/Facebook";
import InstagramSvg from "@/components/svgs/Instagram";
import LinkedinSvg from "@/components/svgs/Linkedin";
import TelefoneSvg from "@/components/svgs/Telefone";
import WhatsappSvg from "@/components/svgs/Whatsapp";

export default function One() {
    return (
        <main className="bg-light-grey min-h-screen flex justify-center items-center">
            <section className="w-full max-w-sm">
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="w-full mb-6">
                        <Image
                        src={Logo}
                        alt="Logo Tecnofeal"
                        className="w-full"
                        />
                    </div>

                    {/* Nome e Título */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-black text-primary-dark-grey">Sr. João Carlos Panzoldo</h2>
                        <h3 className="text-2xl font-semibold text-gray-600">Diretoria</h3>
                    </div>

                    {/* Botões */}
                    <div className="flex flex-col gap-4 w-full">
                        <a href="#">
                            <button className="btn-card flex justify-center items-center">
                                <WhatsappSvg className="m-2"/>
                                Whatsapp
                            </button>
                        </a>
                        <a href="mailto:joao.carlos@tecnofeal.com.br">
                            <button className="btn-card flex justify-center items-center">
                                <EmailSvg className="m-2"/>
                                e-mail
                            </button>
                        </a>
                        <a href="tel:5526062931">
                            <button className="btn-card flex justify-center items-center">
                                <TelefoneSvg className="m-2"/>
                                Telefone
                            </button>
                        </a>
                        <a href="#">
                            <button className="btn-card flex justify-center items-center">
                                <LinkedinSvg className="m-2"/> 
                                Linkedin
                            </button>
                        </a>
                            <a href="#">
                            <button className="btn-card flex justify-center items-center">
                                <InstagramSvg className="m-2"/>
                                Instagram
                            </button>
                        </a>
                        <a href="#">
                            <button className="btn-card flex justify-center items-center">
                                <FacebookSvg className="m-2"/>
                                Facebook
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}