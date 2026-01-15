import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLayerGroup, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa';

const TechCard = ({ icon: Icon, title, items, delay, gridColumn }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: '24px',
                padding: '32px',
                transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                gridColumn,
                cursor: 'default'
            }}
        >
            <Icon style={{
                fontSize: '32px',
                color: isHovered ? '#2997ff' : '#86868b',
                marginBottom: '20px',
                transition: 'color 0.3s ease'
            }} />
            <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '12px',
                color: '#fff'
            }}>{title}</h3>
            <p style={{
                fontSize: '14px',
                color: '#86868b',
                lineHeight: 1.7
            }}>{items}</p>
        </motion.div>
    );
};

const TechStack = () => {
    return (
        <section id="tech-stack" style={{ padding: '120px 24px', background: '#000' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(36px, 6vw, 64px)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        marginBottom: '24px'
                    }}>
                        Tech Stack
                    </h2>
                    <p style={{
                        color: '#86868b',
                        fontSize: '18px',
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.header>

                {/* Bento Grid - 4 columns */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '16px'
                }}>
                    {/* Row 1 */}
                    <TechCard
                        icon={FaCode}
                        title="Languages"
                        items="Python, SQL, HiveQL, JavaScript, C/C++"
                        delay={0.1}
                        gridColumn="span 2"
                    />
                    <TechCard
                        icon={FaServer}
                        title="Big Data"
                        items="Hadoop, Spark, Hive, Kafka, HBase, MapReduce"
                        delay={0.15}
                        gridColumn="span 2"
                    />

                    {/* Row 2 */}
                    <TechCard
                        icon={FaLayerGroup}
                        title="Frameworks"
                        items="React, Node.js, Express, Flask, FastAPI"
                        delay={0.2}
                        gridColumn="span 1"
                    />
                    <TechCard
                        icon={FaBrain}
                        title="AI/ML Libraries"
                        items="TensorFlow, Scikit-learn, OpenCV, LangChain, PySpark"
                        delay={0.25}
                        gridColumn="span 2"
                    />
                    <TechCard
                        icon={FaDatabase}
                        title="Databases"
                        items="MySQL, PostgreSQL, MongoDB, Pinecone, Neo4j"
                        delay={0.3}
                        gridColumn="span 1"
                    />

                    {/* Row 3 */}
                    <TechCard
                        icon={FaCloud}
                        title="Tools & Cloud"
                        items="GitHub, AWS, Docker, Power BI, HuggingFace, Postman, Linux"
                        delay={0.35}
                        gridColumn="span 4"
                    />
                </div>
            </div>
        </section>
    );
};

export default TechStack;
