import { Link } from "react-router-dom";
import { useGuest } from "../../hooks/useGuest";
import { FaPlay } from "react-icons/fa";

function VodAsset({ movie }) {
  const { vodPurchases } = useGuest();
  const isPurchased = vodPurchases.some(v => v.id === movie.id);
  
  return (
    <Link to={`/VoD/${movie.id}`} className="block">
      <div className={ `relative w-48 aspect-[2/3] rounded-xl overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-200 ${isPurchased ? "ring-4 ring-green-500" : ""}`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      {isPurchased && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <FaPlay className="text-white text-4xl" />
          </div>
      )}
      </div>
    </Link>
  );
}

export default VodAsset;
