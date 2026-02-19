CREATE TYPE treatment_enum AS ENUM ('mr', 'ms', 'mx');

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    invoice_number TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    room INTEGER,
    check_in DATE,
    check_out DATE,
    nights INTEGER,
    treatment treatment_enum,
    vod_purchases JSONB,
    bill JSONB,
    i18next_lng TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
