import express from "express";
// import pg from "pg";
import dotenv from "dotenv";
import { pool } from "../db/db.js";
import { generateInvoiceNumber } from "../models/invoice.js";

dotenv.config();
const router = express.Router();

/*
// Config DB
const pool = new pg.Pool({
  host: "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
*/

async function getNextInvoiceNumber() {
  const res = await pool.query(
    "SELECT COUNT(*) FROM invoices WHERE created_at::date = CURRENT_DATE"
  );
  const lastNumber = parseInt(res.rows[0].count, 10) || 0;
  return generateInvoiceNumber(lastNumber);
}

/*
// Genera número de invoice definitivo: INV-YYYYMMDD-XXX
async function generateInvoiceNumber() {
  const dateStr = new Date().toISOString().slice(0,10).replace(/-/g,""); // YYYYMMDD
  // Contamos cuantas facturas hay hoy para numeración correlativa
  const res = await pool.query(
    `SELECT COUNT(*) FROM invoices WHERE created_at::date = CURRENT_DATE`
  );
  const count = parseInt(res.rows[0].count, 10) + 1;
  return `INV-${dateStr}-${String(count).padStart(3,'0')}`;
}
*/

// POST /checkout
router.post("/", async (req, res) => {
  const { guest, vodPurchases, bill, i18nextLng } = req.body;

  if (!guest || !vodPurchases || !bill || !i18nextLng)
    return res.status(400).json({ error: "Missing data" });

  try {
    const invoice_number = await getNextInvoiceNumber();

    const insertQuery = `
      INSERT INTO invoices
      (invoice_number, first_name, last_name, email, room, check_in, check_out, nights, treatment, vod_purchases, bill, i18next_lng)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING invoice_number
    `;

    const values = [
      invoice_number,
      guest.firstName,
      guest.lastName,
      guest.email,
      guest.room,
      guest.checkIn,
      guest.checkOut,
      guest.nights,
      guest.treatment,
      JSON.stringify(vodPurchases),
      bill,
      i18nextLng
    ];

    const result = await pool.query(insertQuery, values);

    res.json({
      message: "Invoice saved",
      invoice_number: result.rows[0].invoice_number
    });
  } catch (err) {
      console.error("Error en checkout:", err.message);
      console.error(err.stack);
      res.status(500).json({ error: err.message });
    }
});

export default router;