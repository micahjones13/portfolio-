interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  npmUrl?: string;
  imageUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Astro UXDS",
    description: "A web component library that brings the Astro design system into your project.",
    technologies: ["Stencil", "CSS", "HTML", "JSX", "Typescript", "Storybook", "Playwright"],
    githubUrl: "https://github.com/RocketCommunicationsInc/astro",
    liveUrl: "https://astro-components.netlify.app/?path=/docs/astro-uxds-start-here--docs",
    npmUrl: "https://www.npmjs.com/package/@astrouxds/astro-web-components"
  },
  {
    title: "Astro UXDS Grafana Plugin",
    description: "A community Grafana plugin that brings the Astro design system into your dashboard.",
    technologies: ["React", "Grafana", "Typescript", "CSS"],
    githubUrl: "https://github.com/RocketCommunicationsInc/grafana-theme/blob/main/src/Clock.tsx",
    liveUrl: "https://grafana.com/grafana/plugins/rocketcom-astrotheme-panel/"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS, featuring a responsive design and animated components.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/micahjones13/portfolio-",
    liveUrl: "https://micahjones.dev"
  },
];

const Projects = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 space-y-8">
      <h2 className="text-2xl font-semibold text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.title}
            className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-colors flex flex-col h-full"
          >
            {project.imageUrl && (
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 flex flex-col flex-grow">
              <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-sm bg-slate-700 text-gray-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.npmUrl && (
                  <a 
                    href={project.npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z"/>
                    </svg>
                    NPM
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 