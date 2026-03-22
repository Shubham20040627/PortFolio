import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Flame, Trophy, Star, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const highlights = [
        { label: "Problems", value: "100+", platform: "LeetCode", color: "#ef4444" },
        { label: "Solved", value: "50+", platform: "GFG", color: "#10b981" },
        { label: "Primary", value: "C++", platform: "Language", color: "#3b82f6" },
        { label: "Verified", value: "JS", platform: "HackerRank", color: "#f59e0b" },
    ];
    return (
        <section id="home" className="hero-section container">
            <div className="hero-content">

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '1rem', textAlign: 'center' }}
                >
                    <span 
                        className="badge" 
                        style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            color: 'var(--accent-blue)', 
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            fontSize: '0.75rem',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            display: 'inline-block'
                        }}
                    >
                        Introduction & Summary
                    </span>
                </motion.div>

                {/* Profile image removed per user request */}

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="text-gradient">Shubham</span>
                </motion.h1>

                <motion.h2
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Full Stack Developer
                </motion.h2>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Welcome to my digital playground! I craft elegant solutions through code, turning
                    ideas into immersive digital experiences that solve real-world problems.
                </motion.p>

                <motion.div
                    className="tech-badges"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span className="badge">JavaScript</span>
                    <span className="badge">React</span>
                    <span className="badge">Node.js</span>
                    <span className="badge">Express</span>
                    <span className="badge">MongoDB</span>
                    <span className="badge">C / C++</span>
                    <span className="badge">Python</span>
                </motion.div>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="hero-highlights-container"
                >
                    {highlights.map((item, idx) => (
                        <div key={idx} className="hero-highlight-card">
                            <span className="h-val" style={{ color: item.color }}>{item.value}</span>
                            <div className="h-info">
                                <span className="h-lab">{item.label}</span>
                                <span className="h-plat">{item.platform}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
