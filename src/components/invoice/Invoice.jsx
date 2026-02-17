import { useMemo } from "react";
import { useGuest } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

function Invoice({ mode = "preview" }) {
  const { t } = useTranslation();
  const { getBill } = useGuest();

  const bill = getBill();

  const today = new Date().toLocaleDateString("es-ES");

  const currencyFormat = (amount) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(amount);

  const referenceNumber = useMemo(() => {
    if (mode === "final") {
      return `INV-${Date.now()}`;
    }
    return `PREV-${Date.now()}`;
  }, [mode]);

  if (!bill || !bill.guest) {
    return (
      <div className="text-white">
        {t("bill.noGuest")}
      </div>
    );
  }

  const totalMovies = bill.vodPurchases.length;
  const totalNights = bill.guest.nights || 0;

  return (
    <div className="bg-gray-900 p-8 rounded-xl max-w-4xl mx-auto text-white shadow-lg">

      {/* Header */}
      <div className="mb-6 space-y-1">
        <p>
          <strong>{t("bill.invoiceNumber")}:</strong> {referenceNumber}
        </p>
        <p>
          <strong>{t("bill.user")}:</strong> {bill.guest.name}
        </p>
        <p>
          <strong>{t("bill.date")}:</strong> {today}
        </p>
      </div>

      {/* Room stay */}
      {totalNights > 0 && (
        <div className="flex justify-between py-2 border-b border-gray-700">
          <span>
            {t("bill.roomStay")} ({totalNights} {t("bill.nights")})
          </span>
          <span>{currencyFormat(bill.nightsPrice)}</span>
        </div>
      )}

      {/* VOD Rentals */}
      {bill.vodPurchases.map((purchase, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b border-gray-800"
        >
          <span>{t("bill.rentalConcept")}</span>
          <span>{currencyFormat(purchase.price)}</span>
        </div>
      ))}

      {/* Totals */}
      <div className="mt-6 space-y-1 text-sm text-gray-400">
        <p>
          {t("bill.totalMovies")}: {totalMovies}
        </p>
        <p>
          {t("bill.totalNights")}: {totalNights}
        </p>
      </div>

      <div className="text-2xl font-bold mt-4 flex justify-between border-t border-gray-600 pt-4">
        <span>{t("bill.totalAmount")}</span>
        <span>{currencyFormat(bill.total)}</span>
      </div>
    </div>
  );
}

export default Invoice;
