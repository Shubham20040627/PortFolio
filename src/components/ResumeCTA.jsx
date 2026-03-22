import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './ResumeCTA.css';

const ResumeCTA = () => {
    return (
        <section id="resume-cta" className="section container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p className="code-label">// my cv</p>
                <h2 className="section-title">Downloadable Resume (PDF format)</h2>
            </motion.div>

            <motion.div
                className="resume-download-wrapper"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <a href="https://drive.google.com/file/d/1E1UOfdTb9TXau2sQrqraIahBMrmN8n17/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary btn-large">
                    <Download size={20} /> Download My CV (PDF)
                </a>
                <p className="resume-note">// available securely via standard download</p>
            </motion.div>

            <motion.div
                className="cv-card card-dark"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <div className="cv-header">
                    <h3 className="cv-name">Shubham</h3>
                    <h4 className="cv-role">Full-Stack Developer & Software Engineer</h4>
                    <div className="cv-contact-info">
                        <span>shubham20040627@gmail.com</span>
                        <span>+91-9501830496</span>
                        <span>Lovely Professional University, Punjab</span>
                    </div>
                </div>

                <hr className="cv-divider" />

                <div className="cv-body-content">
                    {/* Row 1: Skills & Education */}
                    <div className="cv-row-2col">
                        <div className="cv-col">
                            <div className="cv-section">
                                <p className="code-label cv-label">// SKILLS</p>
                                <ul className="cv-list">
                                    <li><strong className="cv-strong">Languages:</strong> JavaScript, C++, Python, SQL</li>
                                    <li><strong className="cv-strong">Frameworks:</strong> React, Node.js, Express, Tailwind CSS</li>
                                    <li><strong className="cv-strong">Tools:</strong> Git, GitHub, MySQL, Postman</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cv-col">
                            <div className="cv-section">
                                <p className="code-label cv-label">// EDUCATION</p>
                                <div className="cv-item">
                                    <h5 className="cv-degree">B.Tech in CSE</h5>
                                    <p className="cv-school">Lovely Professional University · Aug' 23 – Present</p>
                                    <p className="cv-gpa text-accent">7.19 CGPA</p>
                                </div>
                                <div className="cv-item">
                                    <h5 className="cv-degree">Intermediate (PCM)</h5>
                                    <p className="cv-school">Army Public School, Meerut · Mar' 21 – May' 22</p>
                                    <p className="cv-gpa text-accent">91.4%</p>
                                </div>
                                <div className="cv-item">
                                    <h5 className="cv-degree">Matriculation</h5>
                                    <p className="cv-school">Army Public School, Meerut · Mar' 19 – May' 20</p>
                                    <p className="cv-gpa text-accent">85.4%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Projects */}
                    <div className="cv-row-full">
                        <div className="cv-section">
                            <p className="code-label cv-label">// PROJECTS</p>
                            <div className="cv-projects-grid">
                                <div className="cv-item">
                                    <h5 className="cv-degree">Instant File Transfer <span className="cv-date">· Jul' 25</span></h5>
                                    <p className="cv-tech">React, Node.js, Express, Socket.io</p>
                                    <ul className="cv-bullets">
                                        <li>Built a full-stack quick file share application enabling users to seamlessly share files and communicate in real-time.</li>
                                        <li>Integrated Socket.io architecture for bi-directional messaging and efficient binary file streaming without persistent cloud storage.</li>
                                        <li>Architected and optimized a room-based connection module with unique ID generation ensuring secure private sessions.</li>
                                    </ul>
                                </div>

                                <div className="cv-item">
                                    <h5 className="cv-degree">AI Fitness Coach <span className="cv-date">· Mar' 25</span></h5>
                                    <p className="cv-tech">JavaScript, Node.js, Express.js, MongoDB, Google Gemini API</p>
                                    <ul className="cv-bullets">
                                        <li>Engineered an AI-powered fitness assistant using Gemini API to generate personalized workout routines and diet plans.</li>
                                        <li>Built a secure RESTful API using Node.js and Express, implementing JWT-based authentication for encrypted user login.</li>
                                        <li>Implemented persistent session management with MongoDB, enabling users to store chat history and monitor progress.</li>
                                    </ul>
                                </div>

                                <div className="cv-item">
                                    <h5 className="cv-degree">Study Planner <span className="cv-date">· Jan' 25</span></h5>
                                    <p className="cv-tech">React, Node.js, Express, MongoDB, Mongoose</p>
                                    <ul className="cv-bullets">
                                        <li>Constructed a comprehensive Study Planner Application using the MERN Stack, featuring a responsive UI for managing tasks.</li>
                                        <li>Engineered an automated scheduling algorithm that dynamically generates optimized study timetables by analyzing task priorities.</li>
                                        <li>Implemented JWT-based authentication and designed RESTful APIs for secure and efficient data management.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Certifications & Achievements */}
                    <div className="cv-row-2col">
                        <div className="cv-col">
                            <div className="cv-section">
                                <p className="code-label cv-label">// CERTIFICATIONS</p>
                                <ul className="cv-list">
                                    <li><strong className="cv-strong">Complete Python Developer</strong> · Udemy (Nov' 23)</li>
                                    <li><strong className="cv-strong">Mastering in C</strong> · CSE Pathshala (Mar' 24)</li>
                                    <li><strong className="cv-strong">Full Stack Web Dev (MERN)</strong> · Cipher Schools (Jul' 25)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cv-col">
                            <div className="cv-section">
                                <p className="code-label cv-label">// ACHIEVEMENTS</p>
                                <ul className="cv-list">
                                    <li><strong className="cv-strong">100+ DSA Problems Solved</strong> · LeetCode (Feb' 26)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ResumeCTA;
