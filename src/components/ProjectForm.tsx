import { RxCross2 } from "react-icons/rx";

const ProjectForm = () => {

  const projectsList = [
    { id: 1, title: 'Website Redesign', totalTask: 2 },
    { id: 2, title: 'Website 2', totalTask: 3 },
    { id: 3, title: 'Redesign 3', totalTask: 5 },
    { id: 4, title: 'Extra Project 4', totalTask: 1 },
    { id: 5, title: 'Extra Project 5', totalTask: 4 },
  ];

  return (
    <div className="bg-gray-200 w-96 p-4 rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-gray-800">All Projects</h2>
        <RxCross2 size={20} className="text-gray-700 cursor-pointer hover:text-gray-900" />
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-600 mb-3">List of all available projects</p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 mb-3"></div>

      {/* Search + Create Project */}
      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          placeholder="Search project"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Create
        </button>
      </div>

      {/* Scrollable Projects List */}
      <div className="h-56 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {projectsList.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-3 border border-gray-300 rounded-md bg-white hover:shadow-md transition"
          >
            <div>
              <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.totalTask} tasks</p>
            </div>
            <div className="flex gap-3 text-blue-500 cursor-pointer">
              <p className="hover:text-blue-700">Edit</p>
              <p className="hover:text-red-500">Del</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-gray-200 my-3"></div>
      <div className="flex justify-between items-center px-2">
        <p className="text-gray-700 font-medium">{projectsList.length} projects</p>
        <p className="text-green-500 font-semibold cursor-pointer hover:text-green-500">
          Delete All
        </p>
      </div>
    </div>
  )
}

export default ProjectForm;
