import { IoIosMore } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const TaskCard = () => {
    return (
        <div className="mb-4 bg-green-300 border border-gray-300 rounded-2xl w-64 p-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-green-100 text-green-600 text-xs">
                    <span><MdKeyboardDoubleArrowUp size={14} /></span>
                    <span className="ml-1">low</span>
                </div>
                <span><IoIosMore size={16} /></span>
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