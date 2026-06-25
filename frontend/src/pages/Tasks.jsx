import Sidebar from "../components/Sidebar";

const Tasks = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-100">
        <h1 className="text-4xl font-bold mb-6">
          Tasks
        </h1>

        <div className="bg-white p-6 rounded-xl shadow">
          Task Management Module
        </div>
      </main>
    </div>
  );
};

export default Tasks;