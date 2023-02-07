// const { get } = require('../../routes/packing');
const db = require('../connection');


const getPacking = () => {
  console.log("Packing")
  return db.query(`SELECT id, date_pack, product_unit, product_unit_amount, farm_worker FROM pack;`)
    .then(data => {
      console.log('pack data', data)
      return data.rows;
    })

};

const getPackingbyId = (id) => {
  return db.query(`SELECT * FROM pack WHERE id = $1;`, [id])
    .then(result => {
      return result.rows[0];
    });
};


const createPacking = (packing) => {
  console.log('packing update', packing)

  return db.query(`INSERT INTO pack (
    date_pack,
    product_unit,
    product_unit_amount,
    farm_worker
  )VALUES ($1, $2, $3, $4) RETURNING *;`, [packing.date_pack, packing.product_unit, packing.product_unit_amount, packing.farm_worker])
  .then(result => {
    return result.rows[0];
  })
  
};


module.exports = { getPacking, getPackingbyId, createPacking };