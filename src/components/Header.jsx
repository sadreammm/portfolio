import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Work', href: '#work' },
        { name: 'Tech Stack', href: '#tech-stack' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: '16px 24px'
            }}
        >
            <nav
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    transition: 'all 0.5s ease',
                    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    border: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'
                }}
            >
                <a
                    href="#"
                    style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        color: '#fff',
                        textDecoration: 'none'
                    }}
                >
                    Sadeem<span style={{ color: '#2997ff' }}>.</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontSize: '14px',
                                color: 'rgba(255, 255, 255, 0.7)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#fff';
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                                e.target.style.backgroundColor = 'transparent';
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
