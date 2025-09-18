import { IoIosMore } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const TaskCard = () => {
    return (
        <div className="mb-3 bg-white border border-gray-300 rounded-xl w-60 px-2 py-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center px-2 py-0.5 rounded-md bg-green-100 text-green-600 text-xs">
                    <span><MdKeyboardDoubleArrowUp  size={12} /></span>
                    <span className="ml-1">low</span>
                </div>
                <span><IoIosMore size={15} /></span>
            </div>
            <div>
                <h2 className="text-lg font-bold">Design Mockups</h2>
            </div>
            <div>
                <p className="text-sm text-gray-500">Create initial Design Drafts</p>
            </div>
        </div>


    )
}

export default TaskCard