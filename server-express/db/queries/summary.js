// const { get } = require('../../routes/planting');
const db = require('../connection');


const getPlanting = (id) => {
  
  return db.query(`SELECT id, field_id, crop_type, date_fertilized,
  fertilizer_pesticides_applied FROM plant where id=$1;`, [id])
    .then(data => {
     
      return data.rows[0];
    });

};

const getHarvest = (id) => {

  return db.query(`SELECT id, plant_id, farm_worker, date_harvest, tote_id FROM harvest where plant_id=$1;`, [id])
    .then(data => {
      return data.rows[0];
    });

};

// const getHarvestbyId = (id) => {
//   return db.query(`SELECT * FROM harvest WHERE id = $1;`, [id])
//     .then(result => {
//       return result.rows[0];
//     });
// };


const getPacking = (id) => {
 
  return db.query(`SELECT id, plant_id, date_pack, product_unit, product_unit_amount, farm_worker FROM pack where plant_id=$1;`, [id])
    .then(data => {
      return data.rows[0];
    });

};

const getShipping = (id) => {
 
  return db.query(`SELECT * FROM ship where plant_id=$1;`, [id])
    .then(data => {
      return data.rows[0];
    });

};

const deleteHarvest = (id) => {
  return db.query(`DELETE FROM plant WHERE id = $1;`, [Number(id)]);
};


const updateTables = (data, id, table) => {
const stringQuery = `UPDATE ${table} SET ${Object.keys(data)[0]} = $1 WHERE id = ${id} RETURNING *;`
console.log("STRING QUIERY", stringQuery, "another thing", data[Object.keys(data)[0]])

  return db.query(stringQuery, [data[Object.keys(data)[0]]])
    .then(result => {
      
      return result.rows[0];
    });
};



module.exports = { getPlanting, getHarvest, getPacking, getShipping, deleteHarvest, updateTables };