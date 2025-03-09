import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { useMetaTags } from '../hooks/useMetaTags';

const Home = () => {
  useMetaTags({
    title: 'Micah Jones - Full Stack Developer | Home',
    description: 'Welcome to my portfolio! I\'m a Full Stack Developer specializing in React, TypeScript, and modern web development. Explore my projects and skills.',
    keywords: 'Micah Jones, Web Developer, Full Stack Developer, React, TypeScript, JavaScript, Portfolio, Projects',
    ogTitle: 'Micah Jones - Full Stack Developer',
    ogDescription: 'Full Stack Developer specializing in React, TypeScript, and modern web development. Check out my latest projects and skills.',
    ogUrl: 'https://micahjones.dev',
  });

  return (
    <div className="w-full py-8">
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home; 