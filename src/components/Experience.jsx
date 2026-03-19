import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const education = [
        {
            title: "Bachelor's Degree in College",
            institution: "University/College",
            date: "Graduation Year",
            description: "Currently pursuing or completed studies in tech-related field. Focusing on software engineering.",
        },
        {
            title: "Class 12th",
            institution: "Higher Secondary School",
            date: "Completion Year",
            description: "Completed secondary education with strong foundations in Mathematics and Science.",
        },
        {
            title: "Class 10th",
            institution: "High School",
            date: "Completion Year",
            description: "Successfully passed high school with excellence.",
        }
    ];

    const training = [
        {
            title: "MERN Stack Development",
            institution: "Cipher Schools",
            date: "Certification",
            description: "Comprehensive training in building full-stack web applications using MongoDB, Express, React, and Node.js.",
            link: "https://drive.google.com/file/d/1K711G-bIumNzE422BPIrZaz1KPsCw38Y/view?usp=sharing"
        },
        {
            title: "Python Course",
            institution: "Udemy",
            date: "Certification",
            description: "In-depth course covering Python programming principles, algorithms, and libraries.",
            link: "https://www.udemy.com/certificate/UC-d238cf38-e54e-462d-bd21-a473350539e6/"
        },
        {
            title: "C Programming Course",
            institution: "Institute/Platform",
            date: "Certification",
            description: "Solidified core programming concepts such as pointers, memory management, and data structures.",
            link: "https://drive.google.com/file/d/1cBQbAEOkLJe-FB5yIv4O1V8wJh4dxula/view?usp=drive_link"
        }
    ];

    return (
        <section id="education" className="section container experience-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Education & Training
            </motion.h2>

            <div className="timeline-container">
                <div className="timeline-column">
                    <div className="timeline-header">
                        <GraduationCap className="timeline-icon" />
                        <h3>Education</h3>
                    </div>
                    <div className="timeline">
                        {education.map((item, index) => (
                            <motion.div
                                className="timeline-item glass"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="timeline-date">{item.date}</div>
                                <h4 className="timeline-title">{item.title}</h4>
                                <div className="timeline-institution">{item.institution}</div>
                                <p className="timeline-description">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="timeline-column">
                    <div className="timeline-header">
                        <Award className="timeline-icon" />
                        <h3>Training & Certificates</h3>
                    </div>
                    <div className="timeline">
                        {training.map((item, index) => (
                            <motion.div
                                className="timeline-item glass"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            >
                                <div className="timeline-date">{item.date}</div>
                                <h4 className="timeline-title">{item.title}</h4>
                                <div className="timeline-institution">{item.institution}</div>
                                <p className="timeline-description">{item.description}</p>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noreferrer" className="timeline-link">
                                        View Certificate <ExternalLink size={14} />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
