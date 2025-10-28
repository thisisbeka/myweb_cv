import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import CursorTrail from './components/CursorTrail';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <CursorTrail />
      <SmoothScroll />
      <Header />

      <Hero />
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
