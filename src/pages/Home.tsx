import About from '../components/About';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="py-16 space-y-16">
      <Header />
      <About />
      <div className="space-y-0">
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Home; 