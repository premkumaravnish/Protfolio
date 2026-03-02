// ==========================================
// APP.JSX — THE ROOT COMPONENT
// ==========================================
// React Concept: Component Composition
// - App is the "parent" that holds all other components
// - We import each component and place them in order
// - React renders them top to bottom, creating the full page
//
// Think of it like this:
//   App (root)
//   ├── Navbar
//   ├── Hero
//   ├── About
//   ├── Skills
//   ├── Projects
//   ├── Education
//   ├── Contact
//   └── Footer
// ==========================================

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // className="app" wraps everything for global styling
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
