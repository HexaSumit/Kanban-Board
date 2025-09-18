import { GoArrowDown } from "react-icons/go";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaCircleNotch } from "react-icons/fa";
import StatusContainer from "./StatusContainer";

const Projects = () => {
    return (
        <div className=" w-[100%] flex gap-5 mt-5 px-4 text-sm">
            {/* left Projects part container*/}
            <div className="  w-[75%] px-3 py-5 rounded-2xl bg-white">
                <div className=" px-4 flex items-center justify-between gap-10">
                    <div>
                        <h2 className=" font-bold text-xl">Projects</h2>
                    </div>
                    <div className=" flex items-center gap-4">
                        <span className=" text-gray-400">AZ Sort</span>
                        <p className=" flex items-center gap-1 font-semibold"><span>A-Z</span><GoArrowDown /></p>
                        <button className=" bg-gray-200 px-2 py-1 rounded-2xl font-semibold">Add new task</button>
                    </div>
                </div>
                <div className=" flex items-center justify-center gap-7">
                    <StatusContainer />
                    <StatusContainer />
                    <StatusContainer />
                </div>
            </div>

            {/* RIGHT */}
            <div className=" w-[25%] flex flex-col justify-center gap-2 px-3 py-5 rounded-2xl bg-white">
                <div className="w-72 flex justify-between px-4 py-2 bg-gray-200 rounded-lg">
                    <div className=" flex flex-col">
                        <h3 className=" text-gray-500">PROJECT</h3>
                        <h2 className="font-medium text-sm">Website Redesign</h2>
                    </div>
                    <div className="bg-green-600 rounded-full text-white flex items-center justify-center w-8 h-8 mt-1">
                        <IoStatsChartSharp size={15} />
                    </div>
                </div>

                {/* CHART SECTION RIGHT SIDE */}
                <div className=" p-2 h-40 flex items-center justify-center bg-yellow-100">
                    {/* Below one will be removed later with charts */}
                    <FaCircleNotch />  
                </div>

                {/* TASKS PART */}
                <div className=" p-2 bg-yellow-100">
                    <h2 className="text-lg font-semibold mb-3">Tasks</h2>

                    <div className="grid grid-cols-2 gap-3">
                        {/* YOU CAN APPLY MAP FUNCTION LATER ON THIS */}
                        <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                            <p className="text-gray-500 text-sm">TOTAL</p>
                            <h3 className="text-lg font-bold text-black">10</h3>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                            <p className="text-gray-500 text-sm">IN PROGRESS</p>
                            <h3 className="text-lg font-bold text-black">5</h3>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                            <p className="text-gray-500 text-sm">WAITING</p>
                            <h3 className="text-lg font-bold text-black">5</h3>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
                            <p className="text-gray-500 text-sm">COMPLETED</p>
                            <h3 className="text-lg font-bold text-black">0</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects