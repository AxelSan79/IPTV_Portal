import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGuest } from "../context/UserContext";

export function useLogin() {
  const { saveGuest } = useGuest();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const calculateNights = (checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end - start;
    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const login = (formData) => {
    const nights = calculateNights(formData.checkIn, formData.checkOut);
    const room = Math.floor(Math.random() * 1000) + 1;

    saveGuest({
      ...formData,
      nights,
      room,
    });

    setLoading(true);

    setTimeout(() => {
      navigate("/Home");
    }, 1500);
  };

  return {
    login,
    loading,
  };
}
