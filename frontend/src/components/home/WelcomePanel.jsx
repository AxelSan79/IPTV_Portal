import { useGuest } from "../../context/UserContext";

export default function WelcomePanel() {
  const { guest } = useGuest();

  if (!guest) return null;

  return (
    <div className="bg-white bg-opacity-15 p-6 rounded-sm text-white max-w-md">
      <h1 className="text-2xl font-semibold mb-2">
        Welcome {guest.treatment} {guest.lastName}
      </h1>
      <p className="text-lg">
        Room {guest.room}
      </p>
    </div>
  );
}
