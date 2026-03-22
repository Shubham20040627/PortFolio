import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import './EducationDetail.css';

const EducationDetail = () => {
    const education = [
        {
            title: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Lovely Professional University",
            date: "2022 — 2026",
            result: "CGPA: 7.21",
            description: "Specializing in full-stack development and software engineering. Engaging in advanced coursework and hands-on projects.",
            icon: <GraduationCap size={24} />
        },
        {
            title: "XII (Non-Medical)",
            institution: "S.D Model School",
            date: "2021 — 2022",
            result: "Percentage: 82%",
            description: "Focused on core science and mathematics, building a strong foundation for engineering.",
            icon: <BookOpen size={24} />
        },
        {
            title: "X",
            institution: "S.D Model School",
            date: "2019 — 2020",
            result: "Percentage: 80%",
            description: "Completed secondary education with high performance in all subjects.",
            icon: <School size={24} />
        }
    ];

    return (
        <section id="education" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <p className="code-label">// academic journey</p>
                <h2 className="section-title">Education</h2>
            </motion.div>

            <div className="timeline-container">
                <div className="timeline-line"></div>
                {education.map((edu, idx) => (
                    <motion.div 
                        key={idx}
                        className="timeline-item"
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <div className="timeline-dot">
                            {edu.icon}
                        </div>
                        <div className="timeline-content card-glass">
                            <div className="edu-header">
                                <h3>{edu.title}</h3>
                                <span className="edu-date">{edu.date}</span>
                            </div>
                            <p className="edu-institution">{edu.institution}</p>
                            <p className="edu-result">{edu.result}</p>
                            <p className="edu-desc">{edu.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationDetail;
