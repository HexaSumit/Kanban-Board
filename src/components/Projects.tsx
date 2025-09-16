import { GoArrowDown } from "react-icons/go";

const Projects = () => {
  return (
    <div className=" w-[100%] flex mt-5 px-5 text-sm">
        {/* left */}
        <div className=" w-[65%] px-3 flex items-center justify-between bg-yellow-100">
            <div>
                <h2 className=" font-bold text-lg">Projects</h2>
            </div>
            <div className=" flex gap-2">
                <span>AZ Sort</span>
                <p className=" flex items-center gap-1"><span>A-Z</span><GoArrowDown /></p>
                <button className=" bg-gray-200 px-2 rounded-2xl">Add new task</button>
            </div>
        </div>
        {/* right */}
        <div className=" w-[35%] bg-red-300">
            right
        </div>
    </div>
  )
}

export default Projects