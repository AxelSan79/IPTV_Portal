CREATE TYPE treatment_enum AS ENUM ('mr', 'ms', 'mx');

CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  invoice_number VARCHAR(20) UNIQUE NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  room INT NOT NULL,
  checkIn DATE NOT NULL,
  checkOut DATE NOT NULL,
  nights INT NOT NULL,
  treatment treatment_enum NOT NULL,
  vodPurchases JSONB NOT NULL,
  bill NUMERIC(10,2) NOT NULL,
  i18nextLng VARCHAR(5) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
