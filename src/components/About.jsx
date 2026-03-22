import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Monitor, BookOpen, Music } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <p className="code-label">// who i am</p>
                <h2 className="section-title">About Me</h2>
            </motion.div>

                <div className="about-stats-grid">
                    <div className="stat-card">
                        <span className="stat-value">5+</span>
                        <span className="stat-label">Projects Built</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">100+</span>
                        <span className="stat-label">Problems Solved</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">2+</span>
                        <span className="stat-label">Certifications</span>
                    </div>
                </div>

                <div className="about-tags">
                    <span className="about-tag">Open Source</span>
                    <span className="about-tag">Web Development</span>
                    <span className="about-tag">UI Design</span>
                    <span className="about-tag">DSA Enthusiast</span>
                </div>

            <div className="about-grid">
                {/* Left Column (Quick Facts & Hobbies) */}
                <div className="about-left-col">

                    <motion.div
                        className="card-glass about-card mini-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="card-title">Quick Facts</h3>

                        <div className="fact-item">
                            <div className="fact-icon-wrapper bg-purple">
                                <MapPin size={16} />
                            </div>
                            <div className="fact-text">
                                <span className="fact-label">Location</span>
                                <span className="fact-value">India</span>
                            </div>
                        </div>

                        <div className="fact-item">
                            <div className="fact-icon-wrapper bg-blue">
                                <GraduationCap size={16} />
                            </div>
                            <div className="fact-text">
                                <span className="fact-label">Education</span>
                                <span className="fact-value">Pursuing B.Tech in Computer Science and Engineering</span>
                            </div>
                        </div>

                        <div className="fact-item">
                            <div className="fact-icon-wrapper bg-indigo">
                                <Briefcase size={16} />
                            </div>
                            <div className="fact-text">
                                <span className="fact-label">Experience</span>
                                <span className="fact-value">Projects & Training</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="card-glass about-card mini-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="card-title">When I'm Not Coding</h3>
                        <ul className="hobbies-list">
                            <li>
                                <div className="hobby-icon"><Monitor size={16} /></div>
                                Surfing Web
                            </li>
                            <li>
                                <div className="hobby-icon"><BookOpen size={16} /></div>
                                Reading
                            </li>
                            <li>
                                <div className="hobby-icon"><Music size={16} /></div>
                                Music
                            </li>
                        </ul>
                    </motion.div>

                </div>

                {/* Right Column (My Journey & Approach) */}
                <div className="about-right-col">

                    <motion.div
                        className="card-glass about-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="card-title text-accent">My Journey</h3>
                        <p>
                            Hello! I'm <strong>Shubham</strong>, a passionate developer with a deep
                            fascination for transforming complex problems into elegant digital
                            solutions.
                        </p>
                        <p>
                            My journey in tech began with curious exploration and has evolved
                            into a focused expertise in full-stack development. I specialize in
                            crafting responsive, user-centered applications using React,
                            Node.js, and modern cloud infrastructure.
                        </p>
                        <p>
                            What drives me is the intersection of technology and creativity—finding
                            that perfect balance between functional code and intuitive
                            design. I'm constantly expanding my skills through hands-on
                            projects and keeping up with emerging technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        className="card-glass about-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="card-title text-accent">My Approach</h3>
                        <p>
                            I believe in creating technology that's not just functional but
                            meaningful. Every line of code I write aims to solve real problems
                            and enhance user experiences. I value clean architecture,
                            collaborative development, and continuous learning as the
                            foundations of great software.
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default About;
