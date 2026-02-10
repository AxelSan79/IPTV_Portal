export default function TreatmentSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 rounded bg-gray-800"
    >
      <option value="Mr.">Mr.</option>
      <option value="Mrs.">Mrs.</option>
    </select>
  );
}
