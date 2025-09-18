import TaskCard from "./TaskCard"

const StatusContainer = () => {
  return (
    <div className="w-68 flex flex-col items-center gap-5 border border-gray-300 mt-6 py-5 px-2 rounded-lg">
      {/* Title Box */}
      <div className="w-60 bg-gray-300 flex items-center justify-between p-3 rounded-md">
        <h2 className="font-medium text-sm">Yet To Start</h2>
        <span className="bg-green-600 px-2 rounded-full text-white font-medium text-xs">3</span>
      </div>

      {/* Task Cards  */}
      <div>
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  )
}

export default StatusContainer