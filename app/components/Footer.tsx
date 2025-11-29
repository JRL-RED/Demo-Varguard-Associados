'use client';

import Link from 'next/link';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-6 block">
                            VANGUARD & ASSOCIADOS
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Excelência jurídica com visão de futuro. Protegendo seus interesses e impulsionando seus negócios com integridade e inovação.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Navegação</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-gold transition-colors">Quem Somos</Link></li>
                            <li><Link href="#services" className="hover:text-gold transition-colors">Áreas de Atuação</Link></li>
                            <li><Link href="#team" className="hover:text-gold transition-colors">Equipe</Link></li>
                            <li><Link href="#contact" className="hover:text-gold transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Vanguard & Associados. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
