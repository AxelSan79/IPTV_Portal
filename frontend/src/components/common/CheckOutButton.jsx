import { FaSignOutAlt } from "react-icons/fa";

export default function CheckOutButton({ text = "Check Out", onClick, color = "bg-green-600" }) {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:brightness-90 transition-all`}
    >
      <FaSignOutAlt />
      {text}
    </button>
  );
}
