import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState('All Skills');
    const filters = ['All Skills', 'ProgrammingLanguages', 'Frontend', 'Backend', 'Databases', 'Tools'];

    // A representative sample matching the design and the user's previously provided stack
    const skillsData = [
        { name: 'Java', level: 85, category: 'ProgrammingLanguages', icon: 'J' },
        { name: 'C++', level: 80, category: 'ProgrammingLanguages', icon: 'C++' },
        { name: 'Python', level: 75, category: 'ProgrammingLanguages', icon: 'Py' },
        { name: 'C', level: 70, category: 'ProgrammingLanguages', icon: 'C' },
        { name: 'JavaScript', level: 90, category: 'ProgrammingLanguages', icon: 'JS' },

        { name: 'React.js', level: 85, category: 'Frontend', icon: 'Re' },
        { name: 'HTML/CSS', level: 90, category: 'Frontend', icon: 'H5' },

        { name: 'Node.js', level: 85, category: 'Backend', icon: 'No' },
        { name: 'Express.js', level: 80, category: 'Backend', icon: 'Ex' },

        { name: 'MongoDB', level: 85, category: 'Databases', icon: 'Mo' },
        { name: 'MySQL', level: 75, category: 'Databases', icon: 'My' },

        { name: 'Socket.io', level: 80, category: 'Tools', icon: 'So' },
        { name: 'Git/GitHub', level: 85, category: 'Tools', icon: 'Gi' },
        { name: 'XAMPP', level: 70, category: 'Tools', icon: 'Xa' },
        { name: 'phpMyAdmin', level: 70, category: 'Tools', icon: 'Ph' },
    ];

    const filteredSkills = activeFilter === 'All Skills'
        ? skillsData
        : skillsData.filter(skill => skill.category === activeFilter);

    return (
        <section id="skills" className="section container">
            <motion.div
                className="skills-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">
                    <span>Technical Arsenal</span>
                </h2>
                <p className="skills-subtitle">
                    A showcase of technologies I've mastered on my journey as a developer.
                </p>

                {/* Filter Pills */}
                <div className="skills-filters">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`filter-btn ${activeFilter === filter ? 'active-filter' : ''}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div layout className="skills-grid">
                <AnimatePresence>
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="skill-card card-glass"
                        >
                            <div className="skill-card-top">
                                <div className="skill-icon-placeholder">
                                    {skill.icon}
                                </div>
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </div>

                            <div className="progress-bar-container">
                                <motion.div
                                    className="progress-bar-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                ></motion.div>
                            </div>

                            <div className="skill-category-label">
                                {skill.category}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Skills;
