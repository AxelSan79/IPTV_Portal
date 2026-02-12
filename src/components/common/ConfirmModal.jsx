export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "Yes",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-10 rounded-2xl w-[500px] text-center shadow-2xl">
        
        {title && (
          <h3 className="text-2xl mb-6 font-semibold">
            {title}
          </h3>
        )}

        {message && (
          <p className="mb-8 opacity-80">
            {message}
          </p>
        )}

        <div className="flex justify-center gap-6">
          <button
            onClick={onConfirm}
            className="bg-green-600 px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            {confirmText}
          </button>

          <button
            onClick={onCancel}
            className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}
