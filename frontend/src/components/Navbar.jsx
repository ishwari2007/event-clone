import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Event Manager
        </h1>

        <div className="space-x-6">

          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;