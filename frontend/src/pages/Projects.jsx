import Sidebar from "../components/Sidebar";

const Projects = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-100">
        <h1 className="text-4xl font-bold mb-6">
          Projects
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">
          Project Management Module
        </div>
      </main>
    </div>
  );
};

export default Projects;