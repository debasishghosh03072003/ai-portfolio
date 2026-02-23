const Projects = () => {
  return (
    <div className="py-20 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold">FullStack Devoloper</h3>
          <p className="text-gray-400 mt-4 font-bold">
            Portfolio Website powered by OpenRouter and FastAPI, FashionSmart online shoping website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;