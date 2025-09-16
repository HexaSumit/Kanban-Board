import TaskCard from "./TaskCard"

const StatusContainer = () => {
  return (
    <div className=" w-88 flex flex-col gap-8 border-2 mt-10 py-5 px-4 rounded-lg">
        <div className="w-76 bg-gray-300 flex items-center justify-between py-2 px-3 rounded-lg">
            <h2 className=" font-medium  text-lg">Yet To Start</h2>
            <span className=" bg-green-600 px-2 rounded-full text-white font-semibold">3</span>
        </div>
        <div>
            <TaskCard />    
            <TaskCard /> 
        </div>
    </div>
  )
}

export default StatusContainer