CREATE TYPE treatment_enum AS ENUM ('mr', 'ms', 'mx');

CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  invoice_number VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  room INT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  nights INT NOT NULL,
  treatment treatment_enum NOT NULL,
  vod_purchases JSONB NOT NULL,
  bill NUMERIC(10,2) NOT NULL,
  i18next_lng VARCHAR(5) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
