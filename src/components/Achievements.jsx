import { motion } from 'framer-motion';
import { Flame, Lightbulb, Trophy, Star, ExternalLink } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            icon: <Flame size={20} color="#f97316" />,
            title: "Solved 100+ DSA Problems on LeetCode Using C++",
            date: "Feb' 26",
            description: "Consistently practiced Data Structures and Algorithms by solving over 100 problems on LeetCode using C++.",
            link: "https://leetcode.com/u/shubham20040627/",
        }
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
                    <span>Achievements</span>
                </h2>
            </motion.div>

            <div className="achievements-list">
                {achievements.map((achievement, index) => (
                    <motion.div
                        className="achievement-card card-glass"
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="achievement-icon-wrapper">
                            {achievement.icon}
                        </div>

                        <div className="achievement-content">
                            <div className="achievement-top">
                                <h3 className="achievement-title" style={{ display: 'flex', alignItems: 'center' }}>
                                    {achievement.title}
                                    {achievement.link && (
                                        <a href={achievement.link} target="_blank" rel="noreferrer" style={{ marginLeft: '8px', color: 'var(--text-secondary)', display: 'inline-flex' }}>
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </h3>
                                <span className="achievement-date">{achievement.date}</span>
                            </div>
                            <p className="achievement-desc">{achievement.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
