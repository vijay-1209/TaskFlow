import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

import {
  FaProjectDiagram,
  FaTasks,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

import { getProjects } from "../services/projectService";
import { getTasks } from "../services/taskService";

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    completed: 0,
    pending: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const projectsData = await getProjects();
      const tasksData = await getTasks();

      const completedTasks = tasksData.filter(
        (task) => task.status === "Done"
      ).length;

      const pendingTasks = tasksData.length - completedTasks;

      setStats({
        projects: projectsData.length,
        tasks: tasksData.length,
        completed: completedTasks,
        pending: pendingTasks,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-100">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Projects"
            value={stats.projects}
            icon={<FaProjectDiagram />}
            color="bg-blue-500"
          />

          <StatCard
            title="Tasks"
            value={stats.tasks}
            icon={<FaTasks />}
            color="bg-purple-500"
          />

          <StatCard
            title="Completed"
            value={stats.completed}
            icon={<FaCheckCircle />}
            color="bg-green-500"
          />

          <StatCard
            title="Pending"
            value={stats.pending}
            icon={<FaClock />}
            color="bg-orange-500"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;