import { FaEdit, FaTrash } from "react-icons/fa";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h3 className="font-bold text-lg">
        {task?.title}
      </h3>

      <p className="text-gray-500">
        {task?.description}
      </p>

      <div className="mt-3">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {task?.priority}
        </span>
      </div>

      <div className="flex gap-3 mt-4">
        <button className="text-blue-600">
          <FaEdit />
        </button>

        <button className="text-red-600">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;