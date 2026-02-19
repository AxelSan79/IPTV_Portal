import MainLayout from "../components/layout/MainLayout";
import HomeButton from "../components/common/HomeButton";
import BackButton from "../components/common/BackButton";
import Invoice from "../components/invoice/Invoice";
import ConfirmModal from "../components/common/ConfirmModal";
import { useState } from "react";
import { useGuest } from "../context/UserContext";
import { useTranslation } from "react-i18next";
import CheckOutButton from "../components/common/CheckOutButton";

export default function CheckOutPage() {
  const { t } = useTranslation();
  const { getBill, clearGuest } = useGuest();
  const [modalOpen, setModalOpen] = useState(false);
  const [finalInvoice, setFinalInvoice] = useState(null);
  const [checkedOut, setCheckedOut] = useState(false); // <-- nuevo estado
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const bill = getBill();

  const handleConfirmCheckOut = async () => {
  try {
    // POST a backend /checkout
    const res = await fetch(`${backendUrl}/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guest: bill.guest,
        vodPurchases: bill.vodPurchases,
        bill,
        i18nextLng: localStorage.getItem("i18nextLng"),
      }),
    });

    const data = await res.json();

    // Guardamos la factura final en pantalla
    setFinalInvoice({ ...bill, invoiceNumber: data.invoice_number });

    // Eliminamos guest de inmediato para que ya no pueda navegar
    clearGuest();

    // Cerramos modal
    setModalOpen(false);
  } catch (err) {
    console.error(err);
  }
};


  const handleExit = () => {
    window.location.href = "/"; // vuelve al login/home
  };

  return (
    <MainLayout>
      <div className="p-6 flex flex-col gap-8">

        <h1 className="text-2xl">{t("bill.previewTitle")}</h1>

        <div className="flex flex-col md:flex-row gap-10">

          {/* Factura provisional / definitiva */}
          <div className="flex-1">
            <Invoice 
              mode={finalInvoice ? "final" : "preview"}
              billData={finalInvoice || bill}
            />
          </div>

          {/* Botón de check out / exit */}
          <div className="flex flex-col items-center justify-center">
            {!finalInvoice ? (
              <CheckOutButton
                text={t("bill.checkOut")}
                onClick={() => setModalOpen(true)}
              />
            ) : (
              <CheckOutButton
                text={t("bill.exit")}
                onClick={handleExit}
                color="bg-red-600"
              />
            )}
          </div>
        </div>

        {/* Home & Back se ocultan si ya se hizo check-out */}
        {!checkedOut && (
          <div className="flex gap-4 mt-6">
            <HomeButton />
            <BackButton />
          </div>
        )}

        {/* Modal de confirmación */}
        <ConfirmModal
          isOpen={modalOpen}
          title={t("bill.checkOut")}
          message={t("bill.confirmCheckOut")}
          confirmText={t("bill.yes")}
          cancelText={t("bill.no")}
          onConfirm={handleConfirmCheckOut}
          onCancel={() => setModalOpen(false)}
        />
      </div>
    </MainLayout>
  );
}
