import { IoIosMore } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const TaskCard = () => {
    return (
        <div className=" border border-gray-300 rounded-2xl w-76 p-5 flex flex-col gap-4">
            <div className=" flex items-center justify-between">
                <div className=" flex items-center justify-center px-3 rounded-xl bg-green-100 text-green-600">
                    <span><MdKeyboardDoubleArrowUp /></span>
                    <span>low</span>
                </div>
                <span ><IoIosMore size={20} /></span>
            </div>
            <div>
                <h2 className=" text-xl font-bold">Design Mockups</h2>
            </div>
            <div>
                <p className=" text-md text-gray-500">Create initial Design Drafts</p>
            </div>
        </div>
    )
}

export default TaskCard