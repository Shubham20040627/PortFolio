import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section container">
            <motion.div
                className="contact-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="code-label">// let's connect</p>
                <h2 className="section-title">Contact Me</h2>
                <p className="contact-subtitle">
                    Have a question or want to work together? Fill out the form below or reach out directly through my contact information.
                </p>
            </motion.div>

            <div className="contact-grid">

                {/* Contact Form mock replicating design */}
                <motion.div
                    className="contact-form-container card-glass"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form className="contact-form">
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your name" className="form-input" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="your.email@example.com" className="form-input" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your message..." className="form-input"></textarea>
                        </div>

                        <button type="button" className="btn-send">Send Message</button>
                    </form>
                </motion.div>

                {/* Contact Info block replicating right side of design */}
                <motion.div
                    className="contact-info-container card-glass"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="contact-info-title">Contact Information</h3>

                    <div className="info-list">
                        <div className="info-item">
                            <div className="info-icon"><Mail size={16} /></div>
                            <div className="info-text">
                                <span className="info-label">Email</span>
                                <span className="info-value">shubham20040627@gmail.com</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Phone size={16} /></div>
                            <div className="info-text">
                                <span className="info-label">Phone</span>
                                <span className="info-value">+91-9501830496</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Linkedin size={16} /></div>
                            <div className="info-text">
                                <span className="info-label">LinkedIn</span>
                                <a href="https://www.linkedin.com/in/ashubham27" target="_blank" rel="noreferrer" className="info-value link-hover">linkedin.com/in/ashubham27</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Github size={16} /></div>
                            <div className="info-text">
                                <span className="info-label">GitHub</span>
                                <a href="https://github.com/Shubham20040627" target="_blank" rel="noreferrer" className="info-value link-hover">github.com/Shubham20040627</a>
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>

            <motion.div
                className="contact-footer card-glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p>Looking forward to hearing from you!</p>
            </motion.div>

        </section>
    );
};

export default Contact;
