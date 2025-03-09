import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  description?: string;
}

const SKILLS: Skill[] = [
  { name: 'React', description: 'React is my frontend framework of choice.'},
  { name: 'TypeScript', description: 'I used to be a JavaScript gunslinger, but now I\'m a TypeScript lover.' },
  { name: 'Node.js', description: 'Node is my backend framework of choice.'},
  { name: 'Tailwind CSS', description: 'Still getting the hang of it, but with AI it\'s incredibly powerful.' },
  { name: 'Web Components', description: 'I have a soft spot for Web Components. I\'ve built dozens of them.' },
  { name: 'Stencil', description: 'Stencil is my preferred way to build Web Components.' },
  { name: 'CSS', description: 'Something I\'ll never master, but I\'m sure trying to.' },
  { name: 'HTML', description: 'What can I say? It\'s the backbone of the web.' },
  { name: 'Python', description: 'I\'ve used Python here and there, mostly for backend stuff.' },
  { name: 'FastAPI', description: 'FastAPI is what I use when I need a backend fast.' },
  { name: 'Docker', description: 'Docker is useful and I can use it, but don\'t ask me to explain it.' },
  { name: 'Storybook', description: 'Used it to build a documentation site for a web component library.' },
  { name: 'CI/CD', description: 'I\'ve spent too much time fighting with CI/CD pipelines.' },
  { name: 'Git', description: 'git commit -m "fixed?"' },
  { name: 'GitHub', description: 'I really enjoy using GitHub, I\'ve been using it for years.' },
  { name: 'GitLab', description: 'I\'ve used GitLab for a couple projects, but I\'m no pro.' },
  { name: 'Jira', description: 'How many story points can one person handle?' },
  { name: 'Confluence', description: 'Where documentation goes to die.' },
  { name: 'Scrum', description: 'Every project I\'ve been on has used scrum.' },
  { name: 'Agile', description: 'Used in every project I\'ve been on. Sprints, story points, retro\'s, oh my!' },
  { name: 'AI/LLMs', description: 'Incredibly helpful. I love Cursor and Copilot. I am still scared of them.' }
];

const Skills = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = scrollContentRef.current;

    if (!container || !content) return;

    const updateScrollAnimation = () => {
      const contentWidth = content.scrollWidth;
      const progress = (contentWidth / 4); // Since we have 4 sets
      
      container.style.setProperty('--scroll-width', `${progress}px`);
    };

    // Initial calculation
    updateScrollAnimation();

    // Update on resize
    const resizeObserver = new ResizeObserver(updateScrollAnimation);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="w-full space-y-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">Tech & Tools</h2>
      </div>
      <div className="w-full max-w-6xl overflow-hidden py-8 mx-auto px-4 skills-scroll">
        <div ref={scrollContainerRef} className="skills-scroll-container bg-gray-100/50 dark:bg-slate-800/50 py-4">
          <div ref={scrollContentRef} className="skills-scroll-content flex gap-8">
            {[...Array(4)].map((_, setIndex) => (
              SKILLS.map((skill, index) => (
                <div 
                  key={`${skill.name}-${setIndex}-${index}`}
                  className="group relative inline-flex shrink-0 items-center justify-center bg-white dark:bg-slate-700 px-6 py-3 rounded-lg text-gray-700 dark:text-gray-100 font-medium shadow-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors border border-gray-200 dark:border-transparent"
                >
                  {skill.name}
                  {skill.description && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-normal pointer-events-none w-48 text-center shadow-xl z-[100] border border-gray-200 dark:border-sky-300">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-gray-200 dark:border-b-sky-300"></div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[7px] border-transparent border-b-white dark:border-b-gray-900"></div>
                      {skill.description}
                    </div>
                  )}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 