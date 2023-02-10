// const { get } = require('../../routes/planting');
const db = require('../connection');


const getPlanting = (id) => {
  console.log("Planting is lame");
  return db.query(`SELECT id, field_id, crop_type, date_fertilized,
  fertilizer_pesticides_applied FROM plant where id=$1;`, [id])
    .then(data => {
      console.log('plant data on summary page', data);
      return data.rows[0];
    });

};

const getHarvest = (id) => {
  console.log("Summary Queries");
  return db.query(`SELECT id, plant_id, farm_worker, date_harvest, tote_id FROM harvest where plant_id=$1;`, [id])
    .then(data => {
      //   console.log('Summary Query GetHarvest', data.rows)
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
  console.log("Packing");
  return db.query(`SELECT id, plant_id, harvest_id, date_pack, product_unit, product_unit_amount, farm_worker FROM pack where plant_id=$1;`, [id])
    .then(data => {
      console.log('pack data on summary page', data);
      return data.rows[0];
    });

};

const getShipping = (id) => {
  console.log("getshipping");
  return db.query(`SELECT * FROM ship where plant_id=$1;`, [id])
    .then(data => {
      console.log('SHIPPING data on summary page', data);
      return data.rows[0];
    });

};

const deleteHarvest = (id) => {
  return db.query (`DELETE FROM plant WHERE id = $1;`, [Number(id)])}


  const updatePlanting = (planting) => {

    return db.query(`UPDATE plant SET status = $1, $2, $3, $4 WHERE id = ${id} RETURNING *;`, [planting.field_id, planting.crop_type, planting.date_fertilized, planting.fertilizer_pesticides_applied])
      .then(result => {
        return result.rows[0];
      });
  };
  


module.exports = { getPlanting, getHarvest, getPacking, getShipping, deleteHarvest, updatePlanting };