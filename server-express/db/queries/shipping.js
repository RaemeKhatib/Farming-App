const { get } = require('../../routes/shipping');
const db = require('../connection');



const getShipping = () => {
  console.log("getshipping")
  return db.query('SELECT * FROM shipping;')
    .then(data => {
      return data.rows;
    });

};

const getShippingbyId = (id) => {
  return db.query('SELECT * FROM shipping WHERE id = $1;', [id])
    .then(result => {
      return result.rows[0];
    });
};



const createShipping = (shipping) => {

  return db.query(`INSERT INTO shipping (buyer_Name,
    shipping_Date,
    lot_Id,
    product_unit_shipped,
    purchase_order_number
  ) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [shipping.buyerName, shipping.dateShipping, shipping.lotIdentifier, shipping.productUnitShipped, shipping.purchaseOrderNumber])
    .then(result => {
      return result.rows[0];
    });
};

//WE ARE GOING TO NEED A PUT REQUEST TO EDIT INFO WHICH ADDING TO EXISTING INSTANCES IN TABLE potentially remove delete, also updatE WHERE ID = 1 


// CONST UPDATESHIPPING

// const deleteShipping = (shippingId) => {
//   return db.query (`DELETE FROM products WHERE id = $1;`, [productId])
//   .then(result => {
//     return result.rows[0];
//   });
// }


  
  module.exports = { getShipping, getShippingbyId, createShipping };