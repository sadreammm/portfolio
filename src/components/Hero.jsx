import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2997ff]/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-[#30d158]/6 rounded-full blur-[100px]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl mx-auto text-center"
            >
                <motion.p
                    variants={itemVariants}
                    className="text-[#86868b] text-sm md:text-base mb-6 tracking-[0.2em] uppercase font-medium"
                >
                    Full Stack Developer & AI/ML Engineer
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] leading-[1.05] mb-8"
                >
                    Sadeem Mehkery
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px auto' }}
                    className="text-xl sm:text-2xl md:text-3xl text-[#86868b] font-light leading-relaxed"
                >
                    Architecting Intelligent Systems
                    <span style={{ display: 'block', marginTop: '4px', color: '#ffffff' }}>& Scalable Web Solutions.</span>
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
                >
                    <a
                        href="#work"
                        style={{
                            padding: '16px 32px',
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            fontWeight: 500,
                            borderRadius: '50px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                            e.target.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#ffffff';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        View My Work
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '16px 32px',
                            backgroundColor: 'transparent',
                            color: '#ffffff',
                            fontWeight: 500,
                            borderRadius: '50px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                    >
                        View Resume
                    </a>
                    <a
                        href="#contact"
                        style={{
                            padding: '16px 32px',
                            color: '#2997ff',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.textDecoration = 'none';
                        }}
                    >
                        Get In Touch →
                    </a>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Hero;
