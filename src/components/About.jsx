import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    // Merged stats for the 4-column grid
    const stats = [
        { value: "3", label: "Projects Built" },
        { value: "100+", label: "LeetCode Solved" },
        { value: "50+", label: "GFG Solved" },
        { value: "2+", label: "Certifications" },
    ];

    const interests = ["Open Source", "UI Design", "Competitive Programming", "Problem Solving"];

    return (
        <section id="about" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <p className="code-label">// who i am</p>
                <h2 className="section-title">About Me</h2>
            </motion.div>

            <motion.div 
                className="about-bio"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <p>
                    I'm a B.Tech Computer Science student at Lovely Professional University with a strong foundation in C++, Java, 
                    Python, and full-stack web development. I love building projects that solve real problems — from AI-powered chatbots 
                    to robust management systems. I believe in writing clean code, continuous learning, and delivering impactful user experiences.
                </p>
            </motion.div>

            <motion.div 
                className="about-stats-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                {stats.map((stat, idx) => (
                    <div key={idx} className="stat-card card-dark">
                        <span className="stat-value text-accent">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </motion.div>

            <motion.div 
                className="about-interests-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <p className="interests-label">// interests</p>
                <div className="about-tags">
                    {interests.map((interest, idx) => (
                        <span key={idx} className="about-tag btn-outline">{interest}</span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
