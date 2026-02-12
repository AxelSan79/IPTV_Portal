import { Link } from "react-router-dom";

function VodAsset({ movie }) {
  return (
    <Link to={`/VoD/${movie.id}`}>
      <div className="w-48 aspect-[2/3] rounded-xl overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-200">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  );
}

export default VodAsset;
