import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import './EducationDetail.css';

const EducationDetail = () => {
    const education = [
        {
            title: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Lovely Professional University, Phagwara, Punjab",
            date: "Aug' 23 — Present",
            result: "CGPA: 7.19",
            description: "Specializing in full-stack development and software engineering. Engaging in advanced coursework and hands-on projects.",
            icon: <GraduationCap size={24} />
        },
        {
            title: "Intermediate (PCM)",
            institution: "Army Public School, Meerut, Uttar Pradesh",
            date: "Mar' 21 — May' 22",
            result: "Percentage: 91.4%",
            description: "Focused on core science and mathematics, building a strong foundation for engineering.",
            icon: <BookOpen size={24} />
        },
        {
            title: "Matriculation",
            institution: "Army Public School, Meerut, Uttar Pradesh",
            date: "Mar' 19 — May' 20",
            result: "Percentage: 85.4%",
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
                        <div className="timeline-content card-dark">
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
