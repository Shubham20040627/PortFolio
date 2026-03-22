import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ExternalLink, Monitor, Star } from 'lucide-react';
import './Resume.css';

const Resume = () => {
    const [activeTab, setActiveTab] = useState('Education');

    const tabs = ['Education', 'Experience (Internships & Work)', 'Skills', 'Projects', 'Certifications & Courses'];

    const contactInfo = [
        { icon: <Mail size={16} />, text: 'shubham20040627@gmail.com', href: 'mailto:shubham20040627@gmail.com' },
        { icon: <Phone size={16} />, text: '+91 9501830496', href: 'tel:+919501830496' },
        { icon: <Linkedin size={16} />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/ashubham27' },
        { icon: <Github size={16} />, text: 'GitHub', href: 'https://github.com/Shubham20040627' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Education':
                return (
                    <motion.div
                        key="education"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="tab-content-list"
                    >
                        <div className="resume-card card-glass">
                            <div className="resume-card-header">
                                <div>
                                    <h3>Lovely Professional University</h3>
                                    <p className="subtitle">Phagwara, Punjab</p>
                                </div>
                                <div className="date-badge">Aug' 23 - Present</div>
                            </div>
                            <p className="degree">Pursuing B.Tech in Computer Science and Engineering</p>
                            <p className="score">CGPA: 7.19</p>
                        </div>

                        <div className="resume-card card-glass">
                            <div className="resume-card-header">
                                <div>
                                    <h3>Army Public School</h3>
                                    <p className="subtitle">Meerut, Uttar Pradesh</p>
                                </div>
                                <div className="date-badge">Mar' 21 - May' 22</div>
                            </div>
                            <p className="degree">Intermediate (PCM)</p>
                            <p className="score">Percentage: 91.4%</p>
                        </div>

                        <div className="resume-card card-glass">
                            <div className="resume-card-header">
                                <div>
                                    <h3>Army Public School</h3>
                                    <p className="subtitle">Meerut, Uttar Pradesh</p>
                                </div>
                                <div className="date-badge">Mar' 19 - May' 20</div>
                            </div>
                            <p className="degree">Matriculation</p>
                            <p className="score">Percentage: 85.4%</p>
                        </div>
                    </motion.div>
                );

            case 'Experience (Internships & Work)':
                return (
                    <motion.div
                        key="experience"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="tab-content-list"
                    >
                        <div className="internship-card card-glass">
                            <div className="internship-header">
                                <div className="internship-header-left">
                                    <div className="internship-icon">
                                        <Monitor size={20} />
                                    </div>
                                    <div className="internship-titles">
                                        <h3>Full Stack Web Development — MERN</h3>
                                        <p className="company-name">Cipher Schools · Edtech Company</p>
                                    </div>
                                </div>
                                <div className="internship-header-right">
                                    <div className="internship-date">Jun' 25 - Jul' 25</div>
                                    <div className="internship-badge">Training & Internship</div>
                                </div>
                            </div>
                            
                            <div className="internship-body">
                                <p className="internship-desc">
                                    Completed an intensive industrial training program focused on the <strong>MERN stack</strong>. 
                                    Developed high-performance web applications using <strong>MongoDB, Express.js, React, and Node.js</strong>, 
                                    ensuring secure data management and seamless user experiences.
                                </p>
                                
                                <div className="key-learnings-section">
                                    <p className="code-label">// key learnings</p>
                                    <div className="learning-grid">
                                        <div className="learning-item"><span className="dot"></span> Full-stack Integration</div>
                                        <div className="learning-item"><span className="dot"></span> JWT Authentication</div>
                                        <div className="learning-item"><span className="dot"></span> RESTful API Design</div>
                                        <div className="learning-item"><span className="dot"></span> Database Modeling</div>
                                        <div className="learning-item"><span className="dot"></span> Cloud Deployment</div>
                                        <div className="learning-item"><span className="dot"></span> Real-time Features</div>
                                    </div>
                                </div>
                                
                                <div className="internship-footer">
                                    <div className="tech-tags">
                                        <span className="tag">React</span>
                                        <span className="tag">Node.js</span>
                                        <span className="tag">MongoDB</span>
                                        <span className="tag">Express</span>
                                    </div>
                                    <a href="https://drive.google.com/file/d/1K711G-bIumNzE422BPIrZaz1KPsCw38Y/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-cert">
                                        View Certificate <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="internship-card card-glass" style={{ borderTop: '2px solid var(--text-tertiary)' }}>
                            <div className="internship-header">
                                <div className="internship-header-left">
                                    <div className="internship-icon" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                                        <Star size={20} />
                                    </div>
                                    <div className="internship-titles">
                                        <h3>Open to Internships & Work</h3>
                                        <p className="company-name">Remote / On-site opportunities</p>
                                    </div>
                                </div>
                            </div>
                            <div className="internship-body">
                                <p className="internship-desc">Actively seeking opportunities to contribute to real-world projects and grow as a Software Engineer specialized in web technologies.</p>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'Skills':
                return (
                    <motion.div
                        key="skills"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="tab-content-list"
                    >
                        <div className="resume-card card-glass">
                            <h3 style={{ marginBottom: '20px' }}>Core Technical Skills</h3>
                            <div className="resume-skills-grid">
                                <div className="resume-skill-group">
                                    <h4 className="skill-group-title">Languages</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Java</span>
                                        <span className="skill-tag">C++</span>
                                        <span className="skill-tag">Python</span>
                                        <span className="skill-tag">JavaScript</span>
                                        <span className="skill-tag">C</span>
                                    </div>
                                </div>
                                <div className="resume-skill-group">
                                    <h4 className="skill-group-title">Web & Databases</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">React.js</span>
                                        <span className="skill-tag">Node.js</span>
                                        <span className="skill-tag">Express.js</span>
                                        <span className="skill-tag">MongoDB</span>
                                        <span className="skill-tag">MySQL</span>
                                    </div>
                                </div>
                                <div className="resume-skill-group">
                                    <h4 className="skill-group-title">Tools & Others</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Git/GitHub</span>
                                        <span className="skill-tag">Socket.io</span>
                                        <span className="skill-tag">MERN Stack</span>
                                        <span className="skill-tag">RESTful APIs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'Projects': // Re-using existing content format but adapted
                return (
                    <motion.div
                        key="projects"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="tab-content-list"
                    >
                        <div className="resume-card card-glass">
                            <div className="resume-card-header">
                                <div>
                                    <h3 className="project-title-resume">
                                        Instant File Transfer 
                                        <a href="https://quick-file-transfer.vercel.app/" target="_blank" rel="noreferrer" className="link-icon" style={{ marginLeft: '10px' }}><ExternalLink size={14} /></a>
                                        <a href="https://github.com/Shubham20040627/QuickFileTransfer" target="_blank" rel="noreferrer" className="link-icon" style={{ marginLeft: '10px' }}><Github size={14} /></a>
                                    </h3>
                                    <p className="subtitle">Jul' 25</p>
                                </div>
                            </div>
                            <ul className="resume-list">
                                <li>Built a full-stack Quick File Share application using React.js, Node.js, and Socket.io, enabling users to seamlessly share files and communicate in real-time within private rooms.</li>
                                <li>Integrated Socket.io architecture to facilitate instant bi-directional messaging and efficient binary file streaming.</li>
                                <li>Architected and optimized a room-based connection module with unique ID generation.</li>
                            </ul>
                            <p className="tech-stack-text">Tech: React, Node.js, Express, Socket.io</p>
                        </div>

                        <div className="resume-card card-glass">
                            <div className="resume-card-header">
                                <div>
                                    <h3 className="project-title-resume">
                                        AI Fitness Coach 
                                        <a href="https://chat-bot-olive-omega.vercel.app/" target="_blank" rel="noreferrer" className="link-icon" style={{ marginLeft: '10px' }}><ExternalLink size={14} /></a>
                                        <a href="https://github.com/Shubham20040627/Chat-Bot" target="_blank" rel="noreferrer" className="link-icon" style={{ marginLeft: '10px' }}><Github size={14} /></a>
                                    </h3>
                                    <p className="subtitle">Mar' 25</p>
                                </div>
                            </div>
                            <ul className="resume-list">
                                <li>Engineered an AI-powered fitness assistant using the Google Gemini API to generate personalized workout routines and diet plans.</li>
                                <li>Built a secure RESTful API using Node.js and Express, implementing JWT-based authentication.</li>
                                <li>Implemented persistent session management with MongoDB.</li>
                            </ul>
                            <p className="tech-stack-text">Tech: JavaScript, Node.js, Express.js, MongoDB, Google Gemini API</p>
                        </div>

                        <div className="resume-card card-glass">
                            <div className="resume-card-header">
                                <div>
                                    <h3 className="project-title-resume">
                                        Study Planner 
                                        <a href="https://studyplanner-gold.vercel.app/" target="_blank" rel="noreferrer" className="link-icon" style={{ marginLeft: '10px' }}><ExternalLink size={14} /></a>
                                        <a href="https://github.com/Shubham20040627/studyplanner" target="_blank" rel="noreferrer" className="link-icon" style={{ marginLeft: '10px' }}><Github size={14} /></a>
                                    </h3>
                                    <p className="subtitle">Jan' 25</p>
                                </div>
                            </div>
                            <ul className="resume-list">
                                <li>Constructed a comprehensive Study Planner Application using the MERN Stack.</li>
                                <li>Engineered an automated scheduling algorithm that dynamically generates optimized study timetables.</li>
                            </ul>
                            <p className="tech-stack-text">Tech: React, Node.js, Express, MongoDB, Mongoose</p>
                        </div>
                    </motion.div>
                );

            case 'Certifications & Courses':
                return (
                    <motion.div
                        key="certificates"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="tab-content-list"
                    >

                        <div className="resume-card card-glass">
                            <div className="resume-card-header">
                                <div>
                                    <p className="category-label">CERTIFICATE</p>
                                    <h3>Complete Python Developer in 2023: Zero to Mastery</h3>
                                    <p className="subtitle">Udemy</p>
                                </div>
                                <div className="date-badge">Nov' 23</div>
                            </div>
                        </div>

                        <div className="resume-card card-glass">
                            <div className="resume-card-header">
                                <div>
                                    <p className="category-label">CERTIFICATE</p>
                                    <h3>Mastering in C: Basic to Beyond</h3>
                                    <p className="subtitle">CSE Pathshala</p>
                                </div>
                                <div className="date-badge">Mar' 24</div>
                            </div>
                        </div>
                    </motion.div>
                )

            default:
                return (
                    <motion.div
                        key="default"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="tab-content-list content-placeholder"
                    >
                        <p className="text-secondary">Select a tab to view details.</p>
                    </motion.div>
                )
        }
    }

    return (
        <section id="resume" className="section container">
            <motion.div
                className="resume-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                    My <span>Resume</span>
                </h2>

                {/* Contact Chips mimicking the design */}
                <div className="contact-chips">
                    {contactInfo.map((info, idx) => (
                        <a key={idx} href={info.href} className="contact-chip" target={info.text === 'GitHub' || info.text === 'LinkedIn' ? "_blank" : "_self"} rel="noreferrer">
                            <span className="chip-icon">{info.icon}</span>
                            <span className="chip-text">{info.text}</span>
                        </a>
                    ))}
                </div>
            </motion.div>

            <div className="resume-container">
                {/* Tab Navigation */}
                <div className="tabs-nav">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`tab-btn ${activeTab === tab ? 'active-tab' : ''}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content-area">
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </div>

                {/* Download Resume Button */}
                <div className="resume-action">
                    <a href="https://drive.google.com/file/d/1E1UOfdTb9TXau2sQrqraIahBMrmN8n17/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary btn-download" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
