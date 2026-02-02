import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
