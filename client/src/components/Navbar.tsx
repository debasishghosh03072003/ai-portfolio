import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 backdrop-blur-md bg-white/10 shadow-lg">
      <h1 className="text-xl font-bold">Debasish Ghosh</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/chat" className="hover:text-blue-400 transition">AI Chat</Link>
      </div>
    </nav>
  );
};

export default Navbar;