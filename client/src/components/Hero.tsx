import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold"
      >
        Hi, I'm Debasish Ghosh 👋
      </motion.h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        MCA Student | Full Stack Developer | Building AI Powered Applications
      </p>

      <button
        onClick={() => navigate("/projects")}
       className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
        View Projects
      </button>
    </div>
  );
};

export default Hero;