export default function TreatmentSelect({ value, onChange }) {
  return (
    <select
      value={value || "mr"}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 rounded bg-gray-800"
    >
      <option value="mr">Mr.</option>
      <option value="ms">Ms.</option>
      <option value="mx">--</option>
    </select>
  );
}
