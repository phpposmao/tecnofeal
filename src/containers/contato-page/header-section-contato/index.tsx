'use client'
import Image from "next/image";
import { useState } from "react";

import "./style.css";
import Logo from "~/image/logos/logo-horizontal.png";

export default function HeaderSectionContato() {
    const [isOpen, setIsOpen] = useState(false); // Estado do menu hamburger

    return (
        <header className="header-fixed">
            <nav className="header-nav">
                {/* Logo */}
                <Image
                    src={Logo}
                    alt="Logo Tecnofeal Branco"
                    className="logo"
                />

                {/* Menu para desktop */}
                <ul className={`nav-links ${isOpen ? "nav-mobile-open" : ""}`}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                    <li>
                        <a href="#">Produtos</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
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
