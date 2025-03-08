import { useEffect, useRef } from 'react';

const SKILLS = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Web Components', 'Stencil', 'CSS', 'HTML', 'Python', 'FastAPI', 'Docker', 'CI/CD', 'Git', 'GitHub', 'GitLab', 'Jira', 'Confluence', 'Scrum', 'Agile', ];

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
        <h2 className="text-2xl font-semibold mb-8 text-gray-100">Tech & Tools</h2>
      </div>
      <div className="w-full overflow-hidden bg-slate-800/50 py-8 max-w-6xl mx-auto px-4">
        <div ref={scrollContainerRef} className="skills-scroll-container">
          <div ref={scrollContentRef} className="skills-scroll-content flex gap-8">
            {[...Array(4)].map((_, setIndex) => (
              SKILLS.map((skill, index) => (
                <div 
                  key={`${skill}-${setIndex}-${index}`} 
                  className="inline-flex shrink-0 items-center justify-center bg-slate-700 px-6 py-3 rounded-lg text-gray-100 font-medium shadow-lg hover:bg-slate-600 transition-colors"
                >
                  {skill}
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