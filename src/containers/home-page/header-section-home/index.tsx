'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "~/image/logos/logo-tecnofeal.png";
import LogoHeader from "~/image/logos/logo-horizontal.png";

import "./style.css"; // Arquivo CSS convertido

export default function HeaderSectionHome() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header-section">
            <div className="logo-container">
                <Image src={Logo} alt="Logo Tecnofeal" className="logo-image" />
            </div>

            <div className="side-bar"></div>

            <div className="vertical-text-container">
                <div className="vertical-text-wrapper">
                    <div className="vertical-text">Obras que marcam</div>
                    <div className="vertical-line"></div>
                </div>
            </div>

            <nav className="nav-container desktop-menu">
                <div>
                    <a href="#" className="logo-header">
                        <Image
                            src={LogoHeader}
                            alt="Logo Tecnofeal"
                            className="logo-header-image"
                        />
                    </a>

                    <ul className="nav-links">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sobre" className="nav-link">
                                Sobre
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projetos" className="nav-link">
                                Projetos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/servicos" className="nav-link">
                                Serviços
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/contato" className="nav-link">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Menu Mobile */}
            <div className="mobile-menu-container">
                <button
                    className="hamburger-menu"
                    aria-label="Abrir menu"
                    onClick={toggleMenu}
                >
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </button>

                {menuOpen && (
                    <nav className="mobile-menu">
                        <ul className="mobile-nav-links">
                            <li className="mobile-nav-item">
                                <Link href="/" className="mobile-nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="mobile-nav-item">
                                <Link href="/sobre" className="mobile-nav-link">
                                    Sobre
                                </Link>
                            </li>
                            <li className="mobile-nav-item">
                                <Link href="/projetos" className="mobile-nav-link">
                                    Projetos
                                </Link>
                            </li>
                            <li className="mobile-nav-item">
                                <Link href="/servicos" className="mobile-nav-link">
                                    Serviços
                                </Link>
                            </li>
                            <li className="mobile-nav-item">
                                <Link href="/contato" className="mobile-nav-link">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}

