'use client';

import { motion } from 'framer-motion';
import { Scale, Briefcase, Shield, Globe, FileText, ArrowUpRight, Users } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        title: "Direito Previdenciário (INSS)",
        description: "Não aceitamos negativas injustas. Buscamos o melhor benefício possível para sua aposentadoria com análise de dados e atuação ágil.",
        icon: FileText,
        className: "md:col-span-2",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
    },
    {
        title: "Defesa Criminal 24h",
        description: "Sua liberdade é inegociável. Monitoramento de inquéritos em tempo real e defesa técnica combativa em delegacias e tribunais.",
        icon: Shield,
        className: "md:col-span-1",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80"
    },
    {
        title: "Direito de Família & Sucessões",
        description: "Resolução rápida de divórcios e inventários. Protegemos seu patrimônio e garantimos a paz familiar sem burocracia.",
        icon: Users,
        className: "md:col-span-1",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80"
    },
    {
        title: "Direito do Consumidor & Bancário",
        description: "Juros abusivos e negativas de planos de saúde. Lutamos contra grandes empresas para garantir o que é seu.",
        icon: Scale,
        className: "md:col-span-2",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="bg-[#050505] py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-gold font-semibold tracking-wide uppercase text-sm mb-4"
                    >
                        <span className="w-8 h-[1px] bg-gold"></span>
                        Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-white mb-6"
                    >
                        Áreas de Atuação
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl"
                    >
                        Combinamos conhecimento técnico profundo com uma visão estratégica de negócios para entregar resultados excepcionais.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-gold/50 transition-colors duration-500 ${service.className}`}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/60 transition-all duration-500" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between relative z-10">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                        <service.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-serif font-medium text-white mb-3 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
