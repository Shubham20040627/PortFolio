import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section container">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="code-label">// get in touch</p>
                <h2 className="section-title">Contact Section</h2>
                <p className="contact-subtitle">
                    Have a question or want to work together? Fill out the form below or reach out directly through my contact information.
                </p>
            </motion.div>

            <div className="contact-grid">

                {/* Contact Info block replicating left side of sample */}
                <motion.div
                    className="contact-info-container card-dark"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="contact-info-title text-accent">Contact Information</h3>

                    <div className="info-list">
                        <div className="info-item">
                            <div className="info-icon"><Mail size={20} /></div>
                            <div className="info-text">
                                <span className="info-label">Email</span>
                                <span className="info-value">shubham20040627@gmail.com</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Phone size={20} /></div>
                            <div className="info-text">
                                <span className="info-label">Phone</span>
                                <span className="info-value">+91-9501830496</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Linkedin size={20} /></div>
                            <div className="info-text">
                                <span className="info-label">LinkedIn</span>
                                <a href="https://www.linkedin.com/in/ashubham27" target="_blank" rel="noreferrer" className="info-value link-hover">linkedin.com/in/ashubham27</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Github size={20} /></div>
                            <div className="info-text">
                                <span className="info-label">GitHub</span>
                                <a href="https://github.com/Shubham20040627" target="_blank" rel="noreferrer" className="info-value link-hover">github.com/Shubham20040627</a>
                            </div>
                        </div>
                    </div>

                </motion.div>

                {/* Contact Form mock replicating right side of sample */}
                <motion.div
                    className="contact-form-container card-dark"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <form className="contact-form">
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" className="form-input" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" className="form-input" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="6" placeholder="Your message here..." className="form-input"></textarea>
                        </div>

                        <button type="button" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>Send Message</button>
                    </form>
                </motion.div>

            </div>

        </section>
    );
};

export default Contact;
