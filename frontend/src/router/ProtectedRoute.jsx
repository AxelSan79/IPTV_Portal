import { Navigate } from "react-router-dom";
import { useGuest } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
  const { guest } = useGuest();

  if (!guest) {
    return <Navigate to="/" replace />;
  }

  return children;
}
