import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "// LANGUAGES",
            skills: [
                { name: 'JavaScript', level: 90 },
                { name: 'Java', level: 85 },
                { name: 'C++', level: 80 },
                { name: 'Python', level: 75 },
                { name: 'SQL', level: 70 },
            ]
        },
        {
            title: "// FRONTEND",
            skills: [
                { name: 'HTML & CSS', level: 90 },
                { name: 'React', level: 85 },
                { name: 'Tailwind CSS', level: 80 },
            ]
        },
        {
            title: "// BACKEND",
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express', level: 80 },
                { name: 'PHP', level: 65 },
                { name: 'MongoDB', level: 85 },
                { name: 'MySQL', level: 75 },
            ]
        },
        {
            title: "// TOOLS",
            skills: [
                { name: 'Git & GitHub', level: 85 },
                { name: 'VS Code', level: 90 },
                { name: 'Postman', level: 80 },
                { name: 'Linux', level: 65 },
            ]
        }
    ];

    return (
        <section id="skills" className="section container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p className="code-label">// my expertise</p>
                <h2 className="section-title">Skills & Technologies</h2>
            </motion.div>

            <div className="skills-layout-grid">
                {skillCategories.map((category, catIdx) => (
                    <motion.div 
                        key={catIdx}
                        className="skill-category-card card-dark"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                    >
                        <h3 className="skill-cat-title code-label">{category.title}</h3>
                        <div className="skills-list">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="skill-item">
                                    <div className="skill-item-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percent text-muted">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <motion.div 
                                            className="skill-bar-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
