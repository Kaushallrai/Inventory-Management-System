import { useState } from "react";
import { AiOutlinePieChart, AiOutlineMenu } from "react-icons/ai";
import {
  LuLayoutDashboard,
  LuBox,
  LuFileText,
  LuUsers,
  LuShoppingCart,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <LuLayoutDashboard /> },
    { title: "Inventory", icon: <LuBox /> },
    { title: "Reports", icon: <LuFileText /> },
    { title: "Suppliers", icon: <LuUsers /> },
    { title: "Orders", icon: <LuShoppingCart /> },
    { title: "Settings", icon: <LuSettings />, gap: true },
    { title: "Logout", icon: <LuLogOut /> },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-white border-r border-gray-300 h-screen p-5 pt-8 relative duration-300`}
      >
        <button
          className={`absolute cursor-pointer top-9 right-[-1.5rem] p-2 rounded-full ${
            open ? "bg-gray-200" : "bg-gray-300"
          }`}
          onClick={() => setOpen(!open)}
        >
          <AiOutlineMenu
            className={`text-black ${open ? "rotate-0" : "rotate-180"}`}
          />
        </button>
        <div className="flex gap-x-4 items-center">
          <AiOutlinePieChart
            className={`text-3xl text-black cursor-pointer duration-500 ${
              open ? "rotate-[360deg]" : ""
            }`}
          />
          {open && (
            <h1 className="text-black origin-left font-medium text-xl duration-200">
              Inventario
            </h1>
          )}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-100 text-black text-md items-center gap-x-4 ${
                Menu.gap ? "mt-40" : "mt-3"
              } ${index === 0 && "bg-gray-100"}`}
            >
              <span className="text-xl">{Menu.icon}</span>
              <span className={`origin-left duration-200 ${!open && "hidden"}`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
