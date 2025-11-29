'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                            alt="Modern Law Office"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs border border-white/10">
                            <p className="text-white font-serif text-lg italic">
                                "Justiça tardia não é justiça. É injustiça qualificada."
                            </p>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-4 text-gold font-semibold tracking-wide uppercase text-sm mb-4">
                                <span className="w-12 h-[1px] bg-gold"></span>
                                Quem Somos
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                                Não Aceitamos a <br />
                                <span className="text-gray-500 italic">Lentidão do Sistema.</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            A morosidade do judiciário não pode ser uma sentença. Combinamos décadas de tribunal com monitoramento digital 24h para cobrar agilidade em cada etapa do seu processo. Enquanto outros esperam, nós agimos.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            Nossa equipe multidisciplinar atua de forma estratégica, antecipando cenários e protegendo o que é mais valioso para você e sua empresa.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="pt-4"
                        >
                            <button className="group flex items-center gap-2 text-white font-bold border-b-2 border-white pb-1 hover:text-gold hover:border-gold transition-all">
                                Conheça Nossa História
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div >
        </section >
    );
}
