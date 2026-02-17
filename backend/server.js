import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import checkoutRoute from "./routes/checkout.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/checkout", checkoutRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
