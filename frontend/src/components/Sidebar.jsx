import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaTasks,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-slate-900 shadow-lg flex flex-col">
      
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-blue-500">
          TaskFlow
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Project Management System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        
        <NavLink
          to="/dashboard"
          className={menuClass}
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/projects"
          className={menuClass}
        >
          <FaProjectDiagram />
          Projects
        </NavLink>

        <NavLink
          to="/tasks"
          className={menuClass}
        >
          <FaTasks />
          Tasks
        </NavLink>

        <NavLink
          to="/profile"
          className={menuClass}
        >
          <FaUser />
          Profile
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;