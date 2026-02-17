export default function NameFields({ firstName, lastName, onFirstName, onLastName }) {
  return (
    <>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => onFirstName(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
        required
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => onLastName(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
        required
      />
    </>
  );
}
