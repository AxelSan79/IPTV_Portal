export default function EmailField({ value, onChange }) {
  return (
    <input
      type="email"
      placeholder="Email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 rounded bg-gray-800"
      required
    />
  );
}
