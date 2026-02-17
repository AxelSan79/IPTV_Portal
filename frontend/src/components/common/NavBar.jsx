import { NavLink } from "react-router-dom";
import { FaTv, FaFilm, FaChromecast, FaLanguage, FaConciergeBell, FaSignOutAlt } from "react-icons/fa";

const items = [
  { to: "/TV", icon: <FaTv />, label: "TV" },
  { to: "/VoD", icon: <FaFilm />, label: "VoD" },
  { to: "/Cast", icon: <FaChromecast />, label: "Cast" },
  { to: "/Language", icon: <FaLanguage />, label: "Language" },
  { to: "/Services", icon: <FaConciergeBell />, label: "Services" },
  { to: "/Check-Out", icon: <FaSignOutAlt />, label: "Check-Out" },
];

export default function NavBar() {
  return (
    // <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 rounded-xl flex overflow-hidden">
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
