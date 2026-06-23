import { Link, useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaTasks />
          <span>TaskFlow</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Home
          </Link>

          {token && (
            <>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/projects"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Projects
              </Link>

              <Link
                to="/tasks"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Tasks
              </Link>

              <Link
                to="/profile"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Profile
              </Link>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Get Started
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;