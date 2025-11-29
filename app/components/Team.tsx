'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const team = [
    {
        name: "Dr. Ricardo Alencar",
        role: "Sócio Fundador",
        area: "Direito Criminal & Tribunal do Júri",
        bio: "Especialista em defesa criminal de alta complexidade. Atuação combativa em inquéritos policiais e plenário do júri para garantir a liberdade de seus clientes.",
        image: "/Team/250c65e4-faa7-4628-a03d-9ace6410081b.png",
    },
    {
        name: "Dr. Marcelino Pereira",
        role: "Sócio Diretor",
        area: "Direito Previdenciário (INSS) & Revisões",
        bio: "Referência em concessão de benefícios e revisões de aposentadoria. Luta incansavelmente contra as negativas do INSS para garantir o melhor benefício.",
        image: "/Team/634e1584-90ec-4602-a5b9-deefdb1006af.png",
    },
    {
        name: "Dr. Eduardo Santos",
        role: "Associado Sênior",
        area: "Direito de Família & Divórcios",
        bio: "Especialista em resolução de conflitos familiares e patrimoniais. Atua com agilidade em divórcios e inventários para minimizar o desgaste emocional.",
        image: "/Team/a9a8a9bb-1806-452d-84b9-4ff009490b4a.png",
    },
    {
        name: "Dra. Camila Oliveira",
        role: "Especialista",
        area: "Direito do Consumidor & Juros Abusivos",
        bio: "Defensora implacável dos direitos do consumidor. Especialista em reverter juros abusivos e negativas de planos de saúde contra grandes corporações.",
        image: "/Team/bd7d9971-9f64-4d90-8fab333-6dca1fbbb8f4.png",
    }
];

export default function Team() {
    return (
        <section id="team" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-gold font-semibold tracking-wide uppercase text-sm mb-4"
                    >
                        <span className="w-8 h-[1px] bg-gold"></span>
                        Nossa Equipe
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-white"
                    >
                        Especialistas em Reverter Injustiças.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Content Container */}
                            <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-[120px] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                {/* Glass Panel Background */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-t border-white/10 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                                <div className="relative z-10">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-gold font-medium text-sm tracking-wide">{member.role}</p>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{member.area}</p>
                                    </div>

                                    {/* Bio & Socials (Revealed on Hover) */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <div className="w-12 h-[1px] bg-white/20 mb-4"></div>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                            {member.bio}
                                        </p>
                                        <div className="flex gap-4">
                                            <button className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-black text-white transition-all duration-300">
                                                <Linkedin className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-black text-white transition-all duration-300">
                                                <Mail className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Indicator (Top Right) */}
                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0">
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
