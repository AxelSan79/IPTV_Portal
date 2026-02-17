import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUtensils, FaSpa, FaFileInvoiceDollar, FaCloudSun } from "react-icons/fa";

const items = [
  { to: "/Home", icon: <FaHome />, label: "Home" },
  { to: "/Services/HotelInfo", icon: <FaInfoCircle />, label: "Info" },
  { to: "/Services/Restaurant", icon: <FaUtensils />, label: "Restaurant" },
  { to: "/Services/Spa", icon: <FaSpa />, label: "Spa" },
  { to: "/Services/Bill", icon: <FaFileInvoiceDollar />, label: "Bill" },
  { to: "/Services/Weather", icon: <FaCloudSun />, label: "Weather" },
];

export default function NavBarServices() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-2xl px-6 py-4 flex gap-6 shadow-xl">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `w-20 h-20 flex flex-col items-center justify-center text-white
             ${isActive ? "bg-blue-600" : "hover:bg-blue-500"}`
          }
        >
          <div className="text-xl">{item.icon}</div>
          <span className="text-xs mt-1">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
