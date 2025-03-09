import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="w-full py-8">
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home; 