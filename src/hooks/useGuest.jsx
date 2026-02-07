import { useGuest as useContextGuest } from "../context/UserContext";

export function useGuest() {
  const context = useContextGuest();
  if (!context) throw new Error("useGuest must be used within UserProvider");
  return context;
}
