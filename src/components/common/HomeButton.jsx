import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/Home")}
      className="absolute bottom-10 left-10 bg-black/70 text-white px-6 py-4 rounded-xl w-20 h-20 z-30 flex flex-col items-center justify-center hover:bg-blue-500 hover:text-white transition"
    >
      <FaHome />
      Home
    </button>
  );
}
