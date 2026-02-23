const projects = [
  {
    title: "AI Portfolio Website",
    description:
      "Interactive AI-powered resume website built using React, FastAPI, and OpenRouter with context memory.",
    tech: ["React", "FastAPI", "OpenRouter", "SQLite"],
    github: "https://github.com/debasishghosh03072003/ai-portfolio",
    live: "/",
  },
  {
    title: "FashionSmart E-commerce Website",
    description:
      "Full-featured backend with authentication, product management, and payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/debasishghosh03072003/FashionSmart",
    live: "https://share.google/Aix8SsEBgXVW5foGk",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-20 px-6">

      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          My Projects 👨‍💻
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of the projects I’ve built using modern technologies
          and best development practices.
        </p>
      </div>

      {/* Centered Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-700 px-5 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 px-5 py-2 rounded-lg text-sm hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Projects;