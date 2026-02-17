import { useParams, Link } from "react-router-dom";
import SecondLayout from "../components/layout/SecondLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";
import TopBar from "../components/common/TopBar";
import { useGuest } from "../hooks/useGuest";
import { vodAssets } from "../data/vodAssets";
import ConfirmModal from "../components/common/ConfirmModal";
import { useState } from "react";

function VodAssetPage() {
  const [showConfirm, setShowConfirm] = useState(false);
  const { id } = useParams();
  const { vodPurchases, addVodPurchase } = useGuest();

  const movie = vodAssets.find(m => m.id === Number(id));

  if (!movie) return <div>Movie not found</div>;

  const isPurchased = vodPurchases.some(v => v.id === movie.id);

  return (
    <SecondLayout>
      <TopBar title="Rent Movie" />
      <div className="flex gap-16 px-20 py-12 text-white">
        
        {/* Poster */}
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-[320px] rounded-2xl shadow-2xl"
        />

        {/* Info */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">{movie.title}</h2>

          <p className="mb-4 opacity-80">
            {movie.year} • {movie.duration} • {movie.genre}
          </p>

          <p className="mb-10 opacity-80">
            {movie.description}
          </p>

          {isPurchased ? (
            <Link
              to={`/VodPlayerPage/${movie.id}`}
              className="bg-green-600 text-black px-10 py-4 rounded-xl text-lg hover:bg-green-700 transition inline-block"
            >
              Watch
            </Link>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-blue-600 px-10 py-4 rounded-xl text-lg hover:bg-blue-700 transition"
            >
              Rent – {movie.price}€
            </button>
          )}
        </div>
      </div>
      <ConfirmModal
        isOpen={showConfirm}
        title="Confirm purchase"
        message={`Buy "${movie.title}" for ${movie.price}€ ?`}
        confirmText="Yes"
        cancelText="No"
        onConfirm={() => {
          addVodPurchase(movie.id, movie.price);
          setShowConfirm(false);
        }}
        onCancel={() => setShowConfirm(false)}
      />
      <HomeButton />
      <BackButton />
    </SecondLayout>
  );
}

export default VodAssetPage;
