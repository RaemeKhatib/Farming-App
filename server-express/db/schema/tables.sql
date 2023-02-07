-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS harvest CASCADE;
CREATE TABLE harvest (
  id SERIAL PRIMARY KEY NOT NULL,
  crop_type_harvest VARCHAR(255), -- varietal of cranberry (i.e. Crimson Queen or Stevens)
  crop_type_planting VARCHAR(255), -- varietal of cranberry (i.e. Crimson Queen or Stevens)
  field_identifier VARCHAR(255),  --Codes assigned to each field (A4, A5, A7, A8)
  field_identifier_harvest VARCHAR(255),  --Codes assigned to each field (A4, A5, A7, A8)
  lot_Id VARCHAR(255),
  tote_weight INTEGER, -- weight of bin/tote of harvested berries
  date_fertilizer VARCHAR(255), -- date when harvest takes place for the field
  date_harvest VARCHAR(255), -- date when harvest takes place for the field
  date_packing VARCHAR(255), -- date when bin/tote is packaged into product units
  date_shipping VARCHAR(255), -- date when product unit is shipped from farm
  product_unit_packed INTEGER, -- number of product units (i.e. packed from the tote by farm worker)
  product_unit_shipped INTEGER, -- number of product units (i.e. for shipping to retailer)
  purchase_order_number INTEGER, -- Purchase order is created when retailer orders product. This is the number to identify it
  buyer_name VARCHAR(255), -- name of each retailer who buys product 
  farm_worker_identifier VARCHAR(255), -- name of person performing task
  farm_worker_identifier_harvesting VARCHAR(255), -- name of person performing task
  tote_identifier INTEGER,  -- each tote/bin the fruit are put into when harvested has a number
  fertilizer_pesticides_applied VARCHAR(255), -- list of names of fertilizer or pesticides that need to be applied prior to harvest
  product_unit VARCHAR(255) -- list of product units like clamshell packaging, need to track units (same weight for each)
);



DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255),
  admin BOOLEAN,
  password VARCHAR(255)
);

DROP TABLE IF EXISTS shipping CASCADE;
CREATE TABLE shipping (
  id SERIAL PRIMARY KEY,
  buyer_Name VARCHAR(255),
  shipping_Date VARCHAR(255),
  lot_Id VARCHAR(255),
  product_unit_shipped INTEGER,
  purchase_order_number INTEGER
); 



-- generate a harvest_code code from harvest table for each tote of fruit (i.e. field_identifier-tote_identifier-farm_worker_identifier-harvest_date)
-- generate a Lot Identifier for all the fruit harvested on the same date (harvest_code-sum of total tote_weight for date_harvest)
-- need a batch that we can use to go back on info from previous years
-- loggin page
-- security
-- search functionality (top priority stretch)
-- link to relevant CanadaGAP forms (i.e. H1, H2, H3, I, P2, Q)


-- Change input table to Planting table


-- Should be one table that is big that has all 4 steps
-- One major table and it will insert Into from the fields

-- Date/timestamp? 


-- Hardcode  users in there 
-- User table -> for login 
-- Create some seed data ->  2 users,
-- 1 harvest fully complete
-- 1 half complete
-- Just so things show in display

-- Never more than 4 used cases 

-- Username == username
-- Password == password

-- Search filter as stretch

-- Display all past harvests in chronological order


-- 1. Need to have the end point routes -> harvest id
-- 2.  add context
-- Use different urls