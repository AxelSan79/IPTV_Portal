import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import VodAsset from "./VodAsset";

export default function VodGrid({ movies }) {
  const [startIndex, setStartIndex] = useState(0);
  const pageSize = 15;

  const scrollUp = () => {
    setStartIndex((prev) => Math.max(prev - pageSize, 0));
  };

  const scrollDown = () => {
    setStartIndex((prev) =>
      Math.min(prev + pageSize, movies.length - pageSize)
    );
  };

  const visibleMovies = movies.slice(startIndex, startIndex + pageSize);

  return (
    <div className="flex items-center">
      {/* GRID */}
      <div className="grid grid-cols-5 gap-6">
        {visibleMovies.map((movie) => (
          <VodAsset key={movie.id} movie={movie} />
        ))}
      </div>

      {/* ARROWS */}
      <div className="flex flex-col ml-8 justify-center space-y-6">
        {startIndex > 0 && (
          <button
            onClick={scrollUp}
            className="bg-black/60 text-white p-4 rounded-full hover:bg-blue-500 transition"
          >
            <FaArrowUp size={24} />
          </button>
        )}

        {startIndex + pageSize < movies.length && (
          <button
            onClick={scrollDown}
            className="bg-black/60 text-white p-4 rounded-full hover:bg-blue-500 transition"
          >
            <FaArrowDown size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
