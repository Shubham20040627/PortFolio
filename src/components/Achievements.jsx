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

            <div className="milestones-section">
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
