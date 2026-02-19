import { useNavigate } from "react-router-dom";
import { useGuest } from "../../context/UserContext";
import { FaSignOutAlt } from "react-icons/fa";

export default function CheckOutButton() {
  const { clearGuest } = useGuest();
  const navigate = useNavigate();

  const handleCheckOut = () => {
    clearGuest();
    navigate("/");
  };

  return (
    <button
      onClick={handleCheckOut}
      className="bg-red-600 text-white 
                 px-8 py-4 rounded-xl 
                 flex items-center gap-3 
                 hover:bg-red-700 transition-all"
    >
      <FaSignOutAlt />
      Check Out
    </button>
  );
}
