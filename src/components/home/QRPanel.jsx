export default function QRPanel() {
  return (
    <div className="bg-white p-4 rounded-sm text-center">
      <p className="text-sm mb-2">WiFi access</p>
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.axelsan.com"
        alt="WiFi QR"
        className="mx-auto"
      />
    </div>
  );
}
