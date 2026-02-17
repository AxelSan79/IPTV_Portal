export default function DateRangePicker({
  checkIn,
  checkOut,
  onCheckIn,
  onCheckOut,
}) {
  return (
    <div className="space-y-2">
      <label className="block">
        Check-in
        <input
          type="date"
          value={checkIn}
          onChange={(e) => onCheckIn(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 mt-1"
          required
        />
      </label>

      <label className="block">
        Check-out
        <input
          type="date"
          value={checkOut}
          onChange={(e) => onCheckOut(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 mt-1"
          required
        />
      </label>
    </div>
  );
}
