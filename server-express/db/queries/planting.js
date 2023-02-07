// const { get } = require('../../routes/planting');
const db = require('../connection');

const getPlanting = () => {
  console.log("PLANTING")
  return db.query(`SELECT * FROM plant;`)
    .then(data => {
      return data.rows;
    });

};

const getPlantingbyId = (id) => {
  return db.query(`SELECT * FROM plant WHERE id = $1;`, [id])
    .then(result => {
      return result.rows[0];
    });
};



const createPlanting = (planting) => {

  return db.query(`INSERT INTO plant (
    field_id,
    crop_type,
    date_fertilized,
    fertilizer_pesticides_applied
  )VALUES ($1, $2, $3, $4) RETURNING *;`, [planting.field_id, planting.crop_type, planting.date_fertilized, planting.fertilizer_pesticides_applied])
    .then(result => {
      return result.rows[0];
    });
};


module.exports = { getPlanting, getPlantingbyId, createPlanting };