import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/Home");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="absolute bottom-10 right-10 bg-black/70 text-white px-6 py-3 rounded-xl w-20 h-20 flex flex-col items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200"
    >
      <FaArrowLeft size={20} />
      <span className="text-xs mt-1">Back</span>
    </button>
  );
}

