'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const StatCounter = ({ end, suffix = '', label }: { end: number, suffix?: string, label: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * ease));

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end]);

    return (
        <div ref={ref} className="text-center sm:text-left">
            <div className="text-3xl sm:text-5xl font-medium text-white mb-1 sm:mb-2">
                {count}{suffix}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm font-light tracking-wide leading-tight">{label}</div>
        </div>
    );
};

export default function TrustBar() {
    return (
        <div className="relative z-20 w-full bg-[#0A0A0A] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">

                    {/* Left Side: Social Proof */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#0A0A0A] overflow-hidden">
                                        <Image
                                            src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                            alt={`Client ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-base sm:text-lg font-medium text-white">Confiança de nossos clientes</div>
                                <div className="text-gray-400 text-xs sm:text-sm font-light">1.000+ clientes satisfeitos</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Stats */}
                    <div className="flex flex-row gap-4 sm:gap-12 w-full md:w-auto justify-between md:justify-end items-start sm:items-center border-t border-white/10 pt-8 md:pt-0 md:border-t-0">
                        <StatCounter end={15} suffix="K+" label="Casos Resolvidos" />
                        <div className="w-[1px] h-8 sm:h-12 bg-white/10"></div>
                        <StatCounter end={15} suffix="+" label="Anos de Experiência" />
                        <div className="w-[1px] h-8 sm:h-12 bg-white/10"></div>
                        <StatCounter end={10} suffix="K+" label="Clientes Satisfeitos" />
                    </div>

                </div>
            </div>
        </div>
    );
}
