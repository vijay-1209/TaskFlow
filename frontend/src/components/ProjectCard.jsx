import { FaEdit, FaTrash } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">
        {project?.title}
      </h2>

      <p className="text-gray-500 mt-2">
        {project?.description}
      </p>

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

export default ProjectCard;