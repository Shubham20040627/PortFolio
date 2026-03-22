import { motion } from 'framer-motion';
import { Flame, Trophy, Star, ExternalLink } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            icon: <Flame size={24} />,
            title: "100+ Data Structures",
            platform: "LeetCode",
            date: "Feb 2026",
            description: "Mastered core Data Structures and Algorithms by solving 100+ problems using C++.",
            link: "https://leetcode.com/u/shubham20040627/",
        },
        {
            icon: <Trophy size={24} />,
            title: "50+ Target Problems",
            platform: "GeeksforGeeks",
            date: "Jan 2026",
            description: "Strengthened algorithmic logic and problem-solving skills on the GFG platform.",
            link: "https://www.geeksforgeeks.org/profile/shubham14kji",
        },

    ];

    return (
        <section id="achievements" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <p className="code-label">// milestones</p>
                <h2 className="section-title">Competitive Programming & Hackathons</h2>
            </motion.div>

            <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                    <motion.div
                        className="achievement-card card-dark"
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="a-card-header">
                            <div className="a-icon-box">
                                {achievement.icon}
                            </div>
                            <span className="a-date">{achievement.date}</span>
                        </div>
                        
                        <div className="a-title-area">
                            <h3>{achievement.title}</h3>
                            <p className="a-platform text-accent">{achievement.platform}</p>
                        </div>
                        
                        <p className="achievement-desc text-muted">{achievement.description}</p>
                        
                        <div className="a-footer">
                            <a href={achievement.link} target="_blank" rel="noreferrer" className="a-link btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
                                View Profile <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
