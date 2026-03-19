import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';
import iftImg from '../assets/ift.png';
import fitbotImg from '../assets/fitbot.png';
import spImg from '../assets/studyplanner.png';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');
    const filters = ['All Projects', 'Full Stack', 'Data Visualization', 'Frontend', 'API Integration', 'Web App'];

    const projects = [
        {
            title: "Instant File Transfer",
            description: "Built a full-stack quick file share application enabling users to seamlessly share files and communicate in real-time within private rooms. Integrated Socket.io architecture for bi-directional messaging and efficient binary file streaming without persistent cloud storage.",
            techStack: ["React", "Node.js", "Express", "Socket.io"],
            github: "https://github.com/Shubham20040627/QuickFileTransfer",
            live: "https://quickfiletransfer-7cf9.onrender.com/",
            category: ['Full Stack', 'Web App'],
            image: iftImg
        },
        {
            title: "AI Fitness Coach",
            description: "Engineered an AI-powered fitness assistant using the Google Gemini API to generate personalized workout routines and diet plans. Built a secure RESTful API implementing JWT-based authentication for encrypted user login and protected data access.",
            techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Google Gemini API"],
            github: "https://github.com/Shubham20040627/Chat-Bot",
            live: "https://fitbot-lno0.onrender.com/",
            category: ['API Integration', 'Full Stack'],
            image: fitbotImg
        },
        {
            title: "Study Planner",
            description: "Constructed a comprehensive Study Planner Application featuring a responsive UI for managing subjects and tasks. Engineered an automated scheduling algorithm that dynamically generates optimized study timetables by analyzing task priorities.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
            github: "https://github.com/Shubham20040627/Study-Planner",
            live: "https://studyplanner-gold.vercel.app/",
            category: ['Frontend', 'Full Stack'],
            image: spImg
        }
    ];

    const filteredProjects = activeFilter === 'All Projects'
        ? projects
        : projects.filter(p => p.category.includes(activeFilter));

    return (
        <section id="projects" className="section container">
            <motion.div
                className="projects-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">
                    <span>Featured Projects</span>
                </h2>
                <p className="projects-subtitle">
                    A showcase of my work spanning web applications, APIs, and responsive interfaces.
                </p>

                {/* Filters */}
                <div className="projects-filters">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`filter-btn ${activeFilter === filter ? 'active-filter' : ''}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </motion.div>

            <div className="projects-grid-redesign">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        className="project-card-redesign card-glass"
                        key={project.title}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Real Project Screenshot */}
                        <div className="project-image-placeholder" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            <div className="project-tags-overlay">
                                {project.category.map((cat, i) => (
                                    <span key={i} className="overlay-tag">{cat}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-content-redesign">
                            <h3 className="project-title-redesign">{project.title}</h3>
                            <p className="project-desc-redesign">{project.description}</p>

                            <div className="tech-pills">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="tech-pill">{tech}</span>
                                ))}
                            </div>

                            <div className="project-actions">
                                <a href={project.live} className="btn-project btn-live" target="_blank" rel="noreferrer">
                                    Live Demo
                                </a>
                                <a href={project.github} className="btn-project btn-source" target="_blank" rel="noreferrer">
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
