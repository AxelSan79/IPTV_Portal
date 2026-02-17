import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute bottom-10 right-10 bg-black/70 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition"
    >
      <FaArrowLeft />
      Back
    </button>
  );
}
