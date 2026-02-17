export function generateInvoiceNumber(lastNumber = 0) {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  const num = String(lastNumber + 1).padStart(3, "0");

  return `INV-${yyyy}${mm}${dd}-${num}`;
}
