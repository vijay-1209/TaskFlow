import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import {
  FaTasks,
  FaProjectDiagram,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-slate-100 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Projects"
            value="12"
            icon={<FaProjectDiagram />}
            color="bg-blue-500"
          />

          <StatCard
            title="Tasks"
            value="48"
            icon={<FaTasks />}
            color="bg-purple-500"
          />

          <StatCard
            title="Completed"
            value="30"
            icon={<FaCheckCircle />}
            color="bg-green-500"
          />

          <StatCard
            title="Pending"
            value="18"
            icon={<FaClock />}
            color="bg-orange-500"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;