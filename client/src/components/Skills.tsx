const Skills = () => {
  const skills = ["React", "TypeScript", "Node.js", "Python", "MongoDB", "Express Js"];

  return (
    <div className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;