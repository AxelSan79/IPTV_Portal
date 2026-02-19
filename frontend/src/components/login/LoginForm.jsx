import TreatmentSelect from "./TreatmentSelect";
import NameFields from "./NameFields";
import EmailField from "./EmailField";
import DateRangePicker from "./DateRangePicker";

export default function LoginForm({
  formData,
  setFormData,
  onSubmit,
  loading,
}) {
  if (loading) {
    return <h2 className="text-xl text-center">Loading portal...</h2>;
  }
  
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Hotel Check-in
      </h2>

      <TreatmentSelect
        value={formData.treatment}
        onChange={(v) => setFormData({ ...formData, treatment: v })}
      />

      <NameFields
        firstName={formData.firstName}
        lastName={formData.lastName}
        onFirstName={(v) => setFormData({ ...formData, firstName: v })}
        onLastName={(v) => setFormData({ ...formData, lastName: v })}
      />

      <EmailField
        value={formData.email}
        onChange={(v) => setFormData({ ...formData, email: v })}
      />

      <DateRangePicker
        checkIn={formData.checkIn}
        checkOut={formData.checkOut}
        onCheckIn={(v) => setFormData({ ...formData, checkIn: v })}
        onCheckOut={(v) => setFormData({ ...formData, checkOut: v })}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
      >
        Check-in
      </button>
    </form>
  );
}
