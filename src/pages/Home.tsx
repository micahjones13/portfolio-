import About from '../components/About';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="w-full space-y-16 py-8">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home; 