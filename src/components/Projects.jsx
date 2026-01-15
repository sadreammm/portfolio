import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
    {
        title: "SenSight",
        subtitle: "AI-Powered Code Review",
        desc: "Automated pull request review system that provides intelligent code analysis and comments.",
        tags: ["AI", "Code Review", "LLM", "NLP"],
        link: "https://github.com/sadreammm/SenSight",
        color: "#2997ff"
    },
    {
        title: "OnStack",
        subtitle: "Intelligent Enterprise System",
        desc: "Reduced onboarding time by 30% with AI-driven guidance, RAG pipelines, and reinforcement learning achieving 87% accuracy.",
        tags: ["FastAPI", "React", "RL", "RAG", "NLP"],
        link: "https://github.com/sadreammm/OnStack",
        color: "#30d158"
    },
    {
        title: "OptiRoute",
        subtitle: "AI-Powered Fleet Optimization",
        desc: "Optimized Dubai ride-hailing fleet allocation using Prophet, ARIMA, and custom KPIs, reducing idle variance by 40%.",
        tags: ["Machine Learning", "Time Series", "Data Viz"],
        link: null,
        color: "#bf5af2"
    },
    {
        title: "Rexetive",
        subtitle: "Blockchain Enterprise Platform",
        desc: "Full-stack platform with tamper-proof blockchain records, secure APIs, and Docker containerization.",
        tags: ["React", "FastAPI", "Blockchain", "Docker"],
        link: "https://github.com/sadreammm/Rexetive",
        color: "#ff9f0a"
    },
    {
        title: "Enterprise Analytics",
        subtitle: "EY Case Study",
        desc: "Scalable Hadoop & Spark platform with ML risk scoring, RBAC implementation, and Power BI dashboards.",
        tags: ["Hadoop", "Spark", "Kafka", "Power BI"],
        link: null,
        color: "#ff375f"
    },
    {
        title: "LeetCode Finetune",
        subtitle: "LLM Model Training",
        desc: "Finetuned Qwen coder model optimized for solving complex algorithmic problems.",
        tags: ["LLM", "LoRA", "Python", "Finetuning"],
        link: "https://github.com/sadreammm/leetcode-finetune",
        color: "#ffd60a"
    }
];

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: '24px',
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered ? `0 20px 40px -20px ${project.color}30` : 'none',
                cursor: 'pointer'
            }}
        >
            {/* Accent line */}
            <div
                style={{
                    width: isHovered ? '64px' : '48px',
                    height: '4px',
                    borderRadius: '4px',
                    marginBottom: '24px',
                    backgroundColor: project.color,
                    transition: 'all 0.4s ease'
                }}
            />

            {/* Content */}
            <p style={{
                fontSize: '12px',
                color: '#86868b',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '8px',
                fontWeight: 500
            }}>
                {project.subtitle}
            </p>

            <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                marginBottom: '16px',
                color: isHovered ? '#fff' : '#f5f5f7',
                transition: 'color 0.3s ease'
            }}>
                {project.title}
            </h3>

            <p style={{
                color: '#86868b',
                fontSize: '15px',
                lineHeight: 1.6,
                marginBottom: '24px',
                flex: 1
            }}>
                {project.desc}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {project.tags.map(tag => (
                    <span
                        key={tag}
                        style={{
                            fontSize: '12px',
                            padding: '6px 12px',
                            background: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '20px',
                            color: '#86868b',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Link */}
            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: isHovered ? '12px' : '8px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: project.color,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        View on GitHub <FaArrowRight size={12} />
                    </a>
                ) : (
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '14px',
                            color: project.color,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        View in Resume <FaArrowRight size={12} />
                    </a>
                )}
            </div>
        </motion.article>
    );
};

const Projects = () => {
    return (
        <section id="work" style={{ padding: '120px 24px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(36px, 6vw, 64px)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        marginBottom: '24px'
                    }}>
                        Selected Work
                    </h2>
                    <p style={{
                        color: '#86868b',
                        fontSize: '18px',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        A collection of projects showcasing AI/ML innovation and full-stack development.
                    </p>
                </motion.header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '24px'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
