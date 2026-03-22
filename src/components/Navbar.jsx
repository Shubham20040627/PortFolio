import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import heroImg from '../assets/hero.png';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Intro', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#resume' }, // Links to the Experience/Resume section
        { name: 'Projects', href: '#projects' },
        { name: 'Courses', href: '#certifications' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">

                {/* Updated Logo style based on sample */}
                <a href="#home" className="logo">
                    <img src={heroImg} alt="Shubham" className="nav-profile-img" />
                    <span style={{ color: "var(--accent-blue)" }}>Shubham</span> Portfolio
                </a>

                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`nav-link ${link.name === 'Home' ? 'active-link' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isOpen && (
                <div className="mobile-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`mobile-nav-link ${link.name === 'Home' ? 'active-link-mobile' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
