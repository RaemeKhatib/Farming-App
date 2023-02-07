-- Users table seeds here (Example)
INSERT INTO users (email, admin, password) VALUES ('b@b.ca', false, 'password');
INSERT INTO users (email, admin, password) VALUES ('p@p.ca', true, 'password');


INSERT INTO shipping (
    buyer_Name,
    shipping_Date,
    lot_Id,
    product_unit_shipped,
    purchase_order_number
  )VALUES ('Bob', 'Jan 1', 'A1', 3, 4);


INSERT INTO harvest (
    field_identifier,
    date_fertilizer,
    fertilizer_pesticides_applied,
    farm_worker_identifier,
    crop_type_planting
  )VALUES ('A5', 'Feb10', 'Chemical X', 'Adam Sandler', 'Goose Berries')
