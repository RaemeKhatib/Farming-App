DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255),
  admin BOOLEAN,
  password VARCHAR(255)
);


DROP TABLE IF EXISTS plant CASCADE;
CREATE TABLE plant (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  field_id VARCHAR(255),
  crop_type VARCHAR(255),
  date_fertilized VARCHAR(255),
  fertilizer_pesticides_applied VARCHAR(255)
); 

DROP TABLE IF EXISTS harvest CASCADE;
CREATE TABLE harvest (
  id SERIAL PRIMARY KEY,
  plant_id INTEGER REFERENCES plant(id) ON DELETE CASCADE,
  farm_worker VARCHAR(255),
  date_harvest VARCHAR(255),
  tote_id INTEGER
); 

DROP TABLE IF EXISTS pack CASCADE;
CREATE TABLE pack (
  id SERIAL PRIMARY KEY,
  harvest_id INTEGER REFERENCES harvest(id) ON DELETE CASCADE,
  date_pack VARCHAR(255),
  product_unit VARCHAR(255), --Type of packaging
  product_unit_amount VARCHAR(255), --Amount packed
  farm_worker VARCHAR(255)
); 

DROP TABLE IF EXISTS ship CASCADE;
CREATE TABLE ship (
  id SERIAL PRIMARY KEY,
  pack_id INTEGER REFERENCES pack(id) ON DELETE CASCADE,
  purchase_order_number INTEGER,
  buyer_name VARCHAR(255),
  ship_date VARCHAR(255),
  ship_amount VARCHAR(255)
); 