import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/xlgggrwr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset button after 10 seconds
                setTimeout(() => {
                    setStatus('idle');
                }, 10000);
            } else {
                setStatus('error');
                setTimeout(() => {
                    setStatus('idle');
                }, 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        }
    };

    const getInputStyle = (fieldName) => ({
        width: '100%',
        padding: '16px 20px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: `1px solid ${focusedField === fieldName ? 'rgba(41, 151, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
        borderRadius: '12px',
        color: '#fff',
        fontSize: '16px',
        outline: 'none',
        transition: 'all 0.3s ease',
        fontFamily: 'inherit'
    });

    const socials = [
        {
            icon: FaLinkedin,
            href: "https://linkedin.com/in/sadeem-mehkery-738736290",
            label: "LinkedIn"
        },
        {
            icon: FaGithub,
            href: "https://github.com/sadreammm",
            label: "GitHub"
        }
    ];

    return (
        <section id="contact" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
            {/* Background gradient */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'rgba(41, 151, 255, 0.08)',
                borderRadius: '50%',
                filter: 'blur(120px)',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(36px, 6vw, 56px)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        marginBottom: '16px'
                    }}>
                        Let's Build
                        <span className="gradient-text" style={{ display: 'block' }}>Something Great</span>
                    </h2>

                    <p style={{
                        fontSize: '18px',
                        color: '#86868b',
                        lineHeight: 1.6
                    }}>
                        Interested in collaborating or have a project in mind? I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        marginBottom: '48px'
                    }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            disabled={status === 'submitting'}
                            style={getInputStyle('name')}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            disabled={status === 'submitting'}
                            style={getInputStyle('email')}
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        disabled={status === 'submitting'}
                        rows={5}
                        style={{
                            ...getInputStyle('message'),
                            resize: 'vertical',
                            minHeight: '120px'
                        }}
                    />

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        style={{
                            padding: '16px 32px',
                            background: status === 'success' ? '#30d158' : '#fff',
                            color: '#000',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            opacity: status === 'submitting' ? 0.7 : 1
                        }}
                        onMouseEnter={(e) => {
                            if (status !== 'submitting' && status !== 'success') {
                                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                                e.target.style.transform = 'scale(1.02)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (status !== 'submitting' && status !== 'success') {
                                e.target.style.background = '#fff';
                                e.target.style.transform = 'scale(1)';
                            }
                        }}
                    >
                        {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                    </button>

                    {status === 'error' && (
                        <p style={{ color: '#ff375f', textAlign: 'center', fontSize: '14px' }}>
                            Something went wrong. Please try again.
                        </p>
                    )}
                </motion.form>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}
                >
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            style={{
                                padding: '16px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <social.icon size={24} color="rgba(255, 255, 255, 0.7)" />
                        </a>
                    ))}
                </motion.div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        textAlign: 'center',
                        paddingTop: '32px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                        color: '#86868b',
                        fontSize: '14px'
                    }}
                >
                    © {new Date().getFullYear()} Sadeem Mehkery.
                </motion.footer>
            </div>
        </section>
    );
};

export default Contact;
