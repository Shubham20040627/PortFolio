import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Internship.css';
import cipherImg from '../assets/cipher.png';

const Internship = () => {
    return (
        <section id="internship" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <p className="code-label">// work experience</p>
                <h2 className="section-title">Experience (Internships & Work)</h2>
            </motion.div>

            <div className="internship-container">
                <motion.div
                    className="internship-card card-dark"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="internship-header">
                        <div className="company-logo-area">
                            <div className="icon-wrapper">
                                <Briefcase size={24} />
                            </div>
                            <div className="company-info">
                                <h3>Full Stack Web Development</h3>
                                <p className="company-name">Cipher Schools</p>
                            </div>
                        </div>
                        <div className="internship-date">
                            Jul 2024 - Present
                        </div>
                    </div>
                    
                    <div className="internship-body">
                        <div className="internship-desc">
                            <p>
                                Participated in a comprehensive training and internship program focusing on modern MERN stack development. 
                                Designed and developed end-to-end web applications with robust backend architectures.
                            </p>
                            <ul className="internship-highlights">
                                <li>Implemented secure user authentication utilizing JWT formatting.</li>
                                <li>Engineered RESTful APIs with Node.js and Express to handle advanced CRUD operations.</li>
                                <li>Deployed applications to cloud infrastructure and integrated database schemas utilizing MongoDB.</li>
                            </ul>
                            
                            <div className="internship-tech">
                                <span className="tech-pill">MongoDB</span>
                                <span className="tech-pill">Express</span>
                                <span className="tech-pill">React</span>
                                <span className="tech-pill">Node.js</span>
                            </div>
                        </div>
                        
                        <div className="internship-certificate">
                            <a href="https://drive.google.com/file/d/1K711G-bIumNzE422BPIrZaz1KPsCw38Y/view?usp=sharing" target="_blank" rel="noreferrer">
                                <img src={cipherImg} alt="Cipher Schools Certificate" className="certificate-thumb" />
                                <span className="cert-view-text">View Certificate</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Internship;
