import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResumeCTA from './components/ResumeCTA';
import Skills from './components/Skills';
import EducationDetail from './components/EducationDetail';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResumeCTA />
        <Skills />
        <EducationDetail />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
