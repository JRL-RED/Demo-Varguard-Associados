'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

export default function Hero() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 z-0"
                style={{ transform: `translateY(${offset * 0.5}px)` }}
            >
                <Image
                    src="/Componets/home.png"
                    alt="Advogado em tribunal"
                    fill
                    className="object-cover object-[74%_center] md:object-center"
                    priority
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 h-full flex flex-col justify-center">
                <div className="max-w-3xl text-white">
                    {/* Label */}
                    <div className="flex items-center gap-4 mb-8 text-gray-300 font-medium tracking-wide text-sm animate-fade-in-up">
                        <span className="w-12 h-[1px] bg-gray-400"></span>
                        → Sua defesa estratégica e ágil
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-7xl font-serif font-medium leading-[1.1] mb-8 tracking-tight animate-fade-in-up delay-100">
                        Advocacia com Garra e Tecnologia.
                    </h1>

                    {/* Features */}
                    <div className="space-y-3 mb-10 animate-fade-in-up delay-200">
                        {[
                            "✓ Monitoramento processual 24h",
                            "✓ Atuação técnica e combativa",
                            "✓ Transparência e rapidez"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                <span className="text-lg text-gray-200 font-light">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row gap-3 animate-fade-in-up delay-300 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-6 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                            Falar com Advogado
                        </button>
                        <button className="flex-1 sm:flex-none px-6 py-4 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm text-sm sm:text-base whitespace-nowrap">
                            Nossas Áreas
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
