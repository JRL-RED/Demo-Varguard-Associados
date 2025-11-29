'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '/' },
        { name: 'O Método', href: '#about' },
        { name: 'Áreas de Atuação', href: '#services' },
        { name: 'Nossa Equipe', href: '#team' },
        { name: 'Blog', href: '#' },
    ];

    return (
        <nav
            className={twMerge(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-black/60 backdrop-blur-md py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/" className="relative h-12 w-48 transition-opacity hover:opacity-90">
                    <Image
                        src="/Componets/logo_vert.png"
                        alt="VANGUARD & ASSOCIADOS"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 bg-white text-gray-900 hover:bg-gray-100"
                    >
                        Iniciar Consulta
                    </Link>

                </div>
            </div>


        </nav>
    );
}
