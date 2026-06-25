import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

import {
  getProjects,
  createProject,
  deleteProject,
} from "../services/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addProject = async () => {
    if (!title.trim()) return;

    try {
      await createProject({
        title,
        description: "",
      });

      setTitle("");
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  const removeProject = async (id) => {
    try {
      await deleteProject(id);
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-100">
        <h1 className="text-4xl font-bold mb-6">
          Projects
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 border p-3 rounded"
            />

            <button
              onClick={addProject}
              className="bg-blue-600 text-white px-5 rounded"
            >
              Add Project
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <h2 className="font-bold text-xl">
                {project.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {project.description}
              </p>

              <button
                onClick={() =>
                  removeProject(project._id)
                }
                className="mt-3 bg-red-500 text-white px-3 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;