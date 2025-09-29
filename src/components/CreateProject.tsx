import { LuNotebookPen } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const CreateProject = () => {
  return (
    <div className="w-[550px] bg-gray-200 p-4 rounded-xl shadow-md">
      {/* Icon + Close */}
      <div className="flex items-center justify-between mb-3">
        <span className="bg-gray-300 p-2 rounded-full flex items-center justify-center">
          <LuNotebookPen size={20} />
        </span>
        <RxCross2 size={20} className="cursor-pointer hover:text-gray-800" />
      </div>

      {/* Header */}
      <div className="mb-3">
        <h2 className="text-lg font-bold text-gray-800">New Project</h2>
        <p className="text-sm text-gray-600 mt-1">
          Fill in the form below to create or modify a project
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 mb-3"></div>

      {/* Project Name Input */}
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-1">Project Name</label>
        <input
          type="text"
          placeholder="Name of the Project"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 mb-3"></div>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400 transition">
          Close
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
          Add New Project
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
