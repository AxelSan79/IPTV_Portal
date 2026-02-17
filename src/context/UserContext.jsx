import { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

// Context
const UserContext = createContext();

// Provider
export function UserProvider({ children }) {
  const [guest, setGuest] = useState(null);
  const [vodPurchases, setVodPurchases] = useState([]);
  const NIGHT_PRICE = 80;

  // Retrieve data form localStorage
  useEffect(() => {
    const storedGuest = localStorage.getItem("guest");
    const storedVod = localStorage.getItem("vodPurchases");

    if (storedGuest) setGuest(JSON.parse(storedGuest));
    if (storedVod) setVodPurchases(JSON.parse(storedVod));
    }, []);

  // Save guest in state + localStorage
  const saveGuest = (data) => {
    setGuest(data);
    localStorage.setItem("guest", JSON.stringify(data));
  };

  // Logout / check-out
  const clearGuest = () => {
    setGuest(null);
    setVodPurchases([]);
    localStorage.removeItem("guest");
    localStorage.removeItem("vodPurchases");
  };

  // Add VoD purchases
  const addVodPurchase = (assetId, price) => {
    const purchase = { id: assetId, price };
    const updated = [...vodPurchases, purchase];
    setVodPurchases(updated);
    localStorage.setItem("vodPurchases", JSON.stringify(updated));
  };

  // Set language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Bill
  const getBill = () => {
    if (!guest) return null;

    const nightsPrice = (guest.nights || 0) * NIGHT_PRICE;

    const vodTotal = vodPurchases.reduce((acc, v) => acc + v.price, 0);

    return {
      guest,
      nightsPrice,
      vodTotal,
      total: nightsPrice + vodTotal,
      vodPurchases
    };
  };

  const checkOut = () => {
    const finalInvoice = getBill();
  };

  return (
    <UserContext.Provider
      value={{
        guest,
        vodPurchases,
        saveGuest,
        clearGuest,
        addVodPurchase,
        changeLanguage,
        getBill,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Hook for components
export const useGuest = () => useContext(UserContext);
