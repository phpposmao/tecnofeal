'use client'
import Image from "next/image";
import { useState } from "react";

import "./style.css";
import Logo from "~/image/logos/logo-horizontal.png";
import Link from "next/link";

type Props = {
    bg_color: string;
}

export default function HeaderSectionContato({ bg_color }: Props) {
    const [isOpen, setIsOpen] = useState(false); // Estado do menu hamburger

    return (
        <header className={`header-fixed ${bg_color}`}>
            <nav className="header-nav">
                {/* Logo */}
                <Image
                    src={Logo}
                    alt="Logo Tecnofeal Branco"
                    className="logo"
                />

                {/* Menu para desktop */}
                <ul className={`nav-links ${isOpen ? "nav-mobile-open" : ""} `}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/projetos">Projetos</Link>
                    </li>
                    <li>
                        <Link href="/produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link href="/contato">Contato</Link>
                    </li>
                </ul>

                {/* Botão hamburger */}
                <div
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`line ${isOpen ? "rotate-top" : ""}`}></div>
                    <div className={`line ${isOpen ? "fade-out" : ""}`}></div>
                    <div className={`line ${isOpen ? "rotate-bottom" : ""}`}></div>
                </div>
            </nav>
        </header>
    );
}
