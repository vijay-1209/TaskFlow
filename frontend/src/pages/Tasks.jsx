import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      status: "Pending",
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Pending"
                  ? "Completed"
                  : "Pending",
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-slate-100">
        <h1 className="text-4xl font-bold mb-6">
          Tasks
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 border p-3 rounded"
            />

            <button
              onClick={addTask}
              className="bg-blue-600 text-white px-5 rounded"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <h2 className="font-bold text-xl">
                {task.title}
              </h2>

              <p className="mt-2">
                Status: {task.status}
              </p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() =>
                    toggleStatus(task.id)
                  }
                  className="bg-green-500 text-white px-3 py-2 rounded"
                >
                  Toggle Status
                </button>

                <button
                  onClick={() =>
                    deleteTask(task.id)
                  }
                  className="bg-red-500 text-white px-3 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tasks;