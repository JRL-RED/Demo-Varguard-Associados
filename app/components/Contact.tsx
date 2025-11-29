'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="bg-[#0A0A0A] py-24 md:py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    {/* Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <div className="flex items-center gap-4 text-gold font-semibold tracking-wide uppercase text-sm mb-4">
                                <span className="w-12 h-[1px] bg-gold"></span>
                                Contato
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                                Vamos conversar sobre <br />
                                <span className="text-gray-500 italic">o seu futuro.</span>
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Entre em contato para agendar uma consulta inicial. Estamos prontos para ouvir e agir.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <MapPin className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Localização</h4>
                                    <p className="text-gray-400">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <Phone className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Telefone</h4>
                                    <p className="text-gray-400">+55 (11) 3000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                    <Mail className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email</h4>
                                    <p className="text-gray-400">contato@vanguard.com.br</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-wider">Nome</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Seu nome completo" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
                                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold focus:outline-none transition-colors" placeholder="seu@email.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider">Assunto</label>
                                <select className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold focus:outline-none transition-colors [&>option]:text-black">
                                    <option>Selecione uma área</option>
                                    <option>Direito Civil</option>
                                    <option>Direito Empresarial</option>
                                    <option>Outros</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider">Mensagem</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold focus:outline-none transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-gold hover:text-white transition-all duration-300 mt-4">
                                Enviar Mensagem
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
