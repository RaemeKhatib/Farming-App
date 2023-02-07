const { get } = require('../../routes/shipping');
const db = require('../connection');



const getShipping = () => {
  console.log("getshipping")
  return db.query('SELECT * FROM ship;')
    .then(data => {
      return data.rows;
    });

};

const getShippingbyId = (id) => {
  return db.query('SELECT * FROM ship WHERE id = $1;', [id])
    .then(result => {
      return result.rows[0];
    });
};



const createShipping = (shipping) => {

  return db.query(`INSERT INTO ship (
    purchase_order_number,
    buyer_name,
    ship_date,
    ship_amount
  ) VALUES ($1, $2, $3, $4) RETURNING *;`, [shipping.purchase_order_number, shipping.buyer_name, shipping.ship_date, shipping.ship_amount])
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