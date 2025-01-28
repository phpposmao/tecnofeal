import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import ImgCliente from "../../assets/img/clientes/1.png";

export default function ClientesSectionHome() {
    return(
        <section className="bg-primary-grey relative py-16 pt-8">
            <div className="mx-auto w-9/12">
                <SectionHeader 
                    name="parceiros"
                    title="Nossos parceiros"
                />
                <div className="mt-10">
                    <ul className="flex justify-between">
                        <li className="inline-block align-middle p-5 m-0">
                            <a href="" className="opacity-30 block hover:opacity-100">
                                <Image src={ImgCliente} alt="cliente"/>
                            </a>
                        </li>
                        <li className="inline-block align-middle p-5 m-0">
                            <a href="" className="opacity-30 block hover:opacity-100">
                                <Image src={ImgCliente} alt="cliente"/>
                            </a>
                        </li>
                        <li className="inline-block align-middle p-5 m-0">
                            <a href="" className="opacity-30 block hover:opacity-100">
                                <Image src={ImgCliente} alt="cliente"/>
                            </a>
                        </li>
                        <li className="inline-block align-middle p-5 m-0">
                            <a href="" className="opacity-30 block hover:opacity-100">
                                <Image src={ImgCliente} alt="cliente"/>
                            </a>
                        </li>
                        <li className="inline-block align-middle p-5 m-0">
                            <a href="" className="opacity-30 block hover:opacity-100">
                                <Image src={ImgCliente} alt="cliente"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center mt-16">
                    <a href="">
                        <button className="btn btn-shadow-2 rounded-full">Faça parte você também</button>
                    </a>
                </div>
            </div>
        </section>
    );   
}
