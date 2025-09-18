import { FaSearch } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-between py-3 px-4">
      <div className=" flex items-center gap-7">

        <div className=" flex items-center">
          <div className="flex items-center justify-center mr-1 w-7 h-7 rounded-md bg-green-600">
            <CiShare2 className="text-white text-xl" />
          </div>
          <span className=" text-xl font-bold">Pro</span>
          <span className=" text-xl font-semibold">KanBan</span>
        </div>

        <div className="flex items-center rounded-full px-3 py-1 w-64 bg-white shadow-sm">
          <FaSearch className="text-gray-500 mr-2 text-sm" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-sm text-gray-700"
          />
        </div>
      </div>

      <div className=" flex items-center gap-5">
        <div className=" flex items-center justify-center">
          <IoSunnyOutline size={20} />
          <span className=" ml-4 font-semibold">|</span>
        </div>
        <button className=" px-3 py-1 bg-green-600 text-white text-center rounded-2xl">Create project</button>
      </div>
    </div>
  )
}

export default Navbar