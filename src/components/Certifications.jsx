import { motion } from 'framer-motion';
import './Certifications.css';
import cipherImg from '../assets/cipher.png';
import udemyImg from '../assets/udemy.png';
import cProgImg from '../assets/c-prog.png';
import hackerrankImg from '../assets/hackerrank.png';

const Certifications = () => {
    const certs = [
        {
            title: "Full Stack Web Development using MERN",
            provider: "Cipher Schools",
            date: "Jul' 25",
            description: "Built dynamic web applications using the MERN stack with secure authentication (JWT), CRUD operations, and cloud deployment.",
            brandColor: "#1e3a8a", // Keep aesthetic colors
            link: "https://drive.google.com/file/d/1K711G-bIumNzE422BPIrZaz1KPsCw38Y/view?usp=sharing",
            image: cipherImg
        },
        {
            title: "Complete Python Developer in 2023: Zero to Mastery",
            provider: "Udemy",
            date: "Nov' 23",
            description: "Acquired comprehensive Python programming skills including basic syntax and advanced concepts.",
            brandColor: "#4f46e5",
            link: "https://www.udemy.com/certificate/UC-d238cf38-e54e-462d-bd21-a473350539e6/",
            image: udemyImg
        },
        {
            title: "Mastering in C: Basic to Beyond",
            provider: "Computer Science and Engineering Pathshala",
            date: "Mar' 24",
            description: "Developed strong foundational knowledge in C programming covering core constructs to advanced application.",
            brandColor: "#0891b2", // Cyan base for variety
            link: "https://drive.google.com/file/d/1cBQbAEOkLJe-FB5yIv4O1V8wJh4dxula/view?usp=drive_link",
            image: cProgImg
        },
        {
            title: "JavaScript (Basic) Certificate",
            provider: "HackerRank",
            date: "Mar' 26",
            description: "Verified proficiency in core JavaScript fundamentals covering Functions, Hoisting, and Scope logic.",
            brandColor: "#059669", // Emerald green for HackerRank
            link: "https://www.hackerrank.com/certificates/7e9d2c755889",
            image: hackerrankImg
        }
    ];

    return (
        <section id="certifications" className="section container">
            <motion.div
                className="certs-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Certifications & Courses</h2>
                <p className="certs-subtitle">
                    Professional credentials that validate my technical expertise and continuous learning journey.
                </p>
            </motion.div>

            <div className="certs-grid">
                {certs.map((cert, index) => (
                    <motion.div
                        className="cert-card-dark card-dark"
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        {cert.link ? (
                            <a href={cert.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                                <div className="cert-image-mock" style={cert.image ? { backgroundImage: `url(${cert.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}}>
                                    <span className="provider-pill" style={{ backgroundColor: cert.brandColor }}>
                                        {cert.provider}
                                    </span>
                                    {!cert.image && (
                                        <div className="cert-doc-mock">
                                            <div className="cert-lines"></div>
                                            <div className="cert-seal"></div>
                                        </div>
                                    )}
                                    <span className="cert-date-overlay">{cert.date}</span>
                                </div>

                                <div className="cert-content">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p className="cert-desc">{cert.description}</p>

                                    <div className="cert-footer">
                                        <span className="cert-provider-text">{cert.provider}</span>
                                        <span className="cert-date-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            {cert.date} 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="cert-hover-hint">
                                    Click to view certificate
                                </div>
                            </a>
                        ) : (
                            <div style={{ display: 'block', height: '100%' }}>
                                <div className="cert-image-mock" style={cert.image ? { backgroundImage: `url(${cert.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}}>
                                    <span className="provider-pill" style={{ backgroundColor: cert.brandColor }}>
                                        {cert.provider}
                                    </span>
                                    {!cert.image && (
                                        <div className="cert-doc-mock">
                                            <div className="cert-lines"></div>
                                            <div className="cert-seal"></div>
                                        </div>
                                    )}
                                    <span className="cert-date-overlay">{cert.date}</span>
                                </div>

                                <div className="cert-content">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p className="cert-desc">{cert.description}</p>

                                    <div className="cert-footer">
                                        <span className="cert-provider-text">{cert.provider}</span>
                                        <span className="cert-date-text">{cert.date}</span>
                                    </div>
                                </div>
                                <div className="cert-hover-hint">
                                    Details provided above
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
