import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import './ResumeCTA.css';

const ResumeCTA = () => {
    return (
        <section id="resume-cta" className="section container">
            <motion.div
                className="resume-cta-card card-glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="resume-cta-content">
                    <p className="code-label">// my cv</p>
                    <h2 className="section-title">Resume</h2>
                    <p className="resume-cta-text">
                        Deep dive into my technical journey, academic background, and professional experiences. 
                        Download my comprehensive resume to learn more about my skills and projects.
                    </p>
                    <a 
                        href="/Shubham_Resume.pdf" 
                        download 
                        className="btn btn-primary btn-resume"
                    >
                        <Download size={20} /> Download CV
                    </a>
                </div>
                <div className="resume-cta-icon-box">
                    <FileText size={120} strokeWidth={0.5} className="bg-icon" />
                </div>
            </motion.div>
        </section>
    );
};

export default ResumeCTA;
