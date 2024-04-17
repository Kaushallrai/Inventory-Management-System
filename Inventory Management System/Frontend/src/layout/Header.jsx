import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white text-black shadow-md">
      {/* Search bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full sm:w-2/3 lg:w-2/5 mx-3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          className="bg-transparent text-black focus:outline-none w-full text-sm"
          type="text"
          placeholder="Search product, supplier, order"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        {/* Notifications icon */}
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <IoMdNotificationsOutline size={24} />
        </div>

        {/* Avatar icon */}
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <RxAvatar size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
