'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#2f324a] bg-opacity-95 backdrop-blur-sm border-b border-[#74fac0]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Name */}
                    <Link href="/" className="text-2xl font-bold text-white hover:text-[#74fac0] transition-colors">
                        Shingo Kubomura
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-white hover:text-[#74fac0] transition-colors font-medium"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/projects"
                            className="text-white hover:text-[#74fac0] transition-colors font-medium"
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/experience"
                            className="text-white hover:text-[#74fac0] transition-colors font-medium"
                            onClick={closeMenu}
                        >
                            Experience
                        </Link>
                        <Link
                            href="/about"
                            className="text-white hover:text-[#74fac0] transition-colors font-medium"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </nav>

                    {/* Social Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://github.com/shingoooooon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#74fac0] transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shingokubomura/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#74fac0] transition-colors"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-[#74fac0] transition-colors"
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-[#2f324a] bg-opacity-95 backdrop-blur-sm border-b border-[#74fac0]">
                        <nav className="flex flex-col space-y-4 p-4">
                            <Link
                                href="/"
                                className="text-white hover:text-[#74fac0] transition-colors font-medium py-2"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="/projects"
                                className="text-white hover:text-[#74fac0] transition-colors font-medium py-2"
                                onClick={closeMenu}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/experience"
                                className="text-white hover:text-[#74fac0] transition-colors font-medium py-2"
                                onClick={closeMenu}
                            >
                                Experience
                            </Link>
                            <Link
                                href="/about"
                                className="text-white hover:text-[#74fac0] transition-colors font-medium py-2"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                            <div className="flex items-center space-x-4 pt-4 border-t border-[#74fac0]">
                                <a
                                    href="https://github.com/shingoooooon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#74fac0] transition-colors"
                                >
                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shingokubomura/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#74fac0] transition-colors"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
