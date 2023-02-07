// const { get } = require('../../routes/planting');
const db = require('../connection');




const getPlanting = () => {
  console.log("PLANTING")
  return db.query('SELECT * FROM harvest;')
    .then(data => {
      return data.rows;
    });

};

const getPlantingbyId = (id) => {
  return db.query('SELECT * FROM harvest WHERE id = $1;', [id])
    .then(result => {
      return result.rows[0];
    });
};



const createPlanting = (planting) => {

  return db.query(`INSERT INTO harvest (
    field_identifier,
    date_fertilizer,
    fertilizer_pesticides_applied,
    farm_worker_identifier,
    crop_type_planting
  )VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [planting.fieldIdentifier, planting.dateFertilizer, planting.fertilizerPesticide, planting.farmWorkerIdentifier, planting.cropType])
    .then(result => {
      return result.rows[0];
    });
};


module.exports = { getPlanting, getPlantingbyId, createPlanting };