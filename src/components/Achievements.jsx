import { motion } from 'framer-motion';
import { Flame, Lightbulb, Trophy, Star, ExternalLink } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            icon: <Flame size={20} />,
            title: "100+ DSA Problems Solved",
            platform: "LeetCode",
            date: "Feb' 26",
            description: "Mastered core Data Structures and Algorithms by solving 100+ problems using C++.",
            link: "https://leetcode.com/u/shubham20040627/",
        },
        {
            icon: <Trophy size={20} />,
            title: "50+ Problems Solved",
            platform: "GeeksforGeeks",
            date: "Jan' 26",
            description: "Strengthened algorithmic logic and problem-solving skills on GFG platform.",
            link: "https://www.geeksforgeeks.org/profile/shubham14kji",
        },
        {
            icon: <Star size={20} />,
            title: "JavaScript (Basic) Certificate",
            platform: "HackerRank",
            date: "Mar' 26",
            description: "Verified proficiency in JavaScript fundamentals including Functions, Hoisting, and Scope.",
            link: "https://www.hackerrank.com/certificates/7e9d2c755889",
        }
    ];

    const highlights = [
        { label: "Problems", value: "100+", platform: "LeetCode", color: "#ef4444" },
        { label: "Solved", value: "50+", platform: "GFG", color: "#10b981" },
        { label: "Primary", value: "C++", platform: "Language", color: "#3b82f6" },
        { label: "Verified", value: "JS", platform: "HackerRank", color: "#f59e0b" },
    ];

    return (
        <section id="achievements" className="section container">
            <motion.div
                className="achievements-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">
                    <span>Competitive Programming & Hackathons</span>
                </h2>
            </motion.div>

            <div className="highlights-grid">
                <p className="code-label">// highlights</p>
                <div className="highlights-container">
                    {highlights.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            className="highlight-card card-glass"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <span className="h-value" style={{ color: item.color }}>{item.value}</span>
                            <span className="h-label">{item.label}</span>
                            <span className="h-platform">{item.platform}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="milestones-section">
                <p className="code-label">// milestones</p>
                <div className="achievements-list">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            className="achievement-card card-glass"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="a-card-header">
                                <div className="a-icon-box">
                                    {achievement.icon}
                                </div>
                                <div className="a-title-area">
                                    <h3>{achievement.title}</h3>
                                    <p className="a-platform">{achievement.platform}</p>
                                </div>
                                <span className="a-date">{achievement.date}</span>
                            </div>
                            
                            <p className="achievement-desc">{achievement.description}</p>
                            
                            <div className="a-footer">
                                <a href={achievement.link} target="_blank" rel="noreferrer" className="a-link">
                                    View on {achievement.platform} <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
