// const { get } = require('../../routes/planting');
const db = require('../connection');


const getHarvest = () => {
  console.log("Harvesting")
  return db.query('SELECT id, farm_worker_identifier_harvesting, crop_type_harvest, field_identifier_harvest, date_harvest, tote_identifier FROM harvest;')
    .then(data => {
      return data.rows;
    });

};

const getHarvestbyId = (id) => {
  return db.query('SELECT * FROM harvest WHERE id = $1;', [id])
    .then(result => {
      return result.rows[0];
    });
};



const createHarvest = (harvesting) => {

  return db.query(`UPDATE harvest 
  SET farm_worker_identifier_harvesting = $1, crop_type_harvest = $2, field_identifier_harvest = $3, date_harvest = $4, tote_identifier = $5
  WHERE id = $6 RETURNING *` , [harvesting.farmWorkerHarvesting, harvesting.cropType, harvesting.fieldIdentifierHarvest, harvesting.dateHarvest, harvesting.toteIdentifier, harvesting.id])
  .then(result => {
    return result.rows[0];
  })
  // return db.query(`INSERT INTO harvest (
  //   farm_worker_identifier_harvesting,
  //   crop_type_harvest,
  //   field_identifier_harvest,
  //   date_harvest,
  //   tote_identifier
  // )VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [harvesting.farmWorkerHarvesting, harvesting.cropType, harvesting.fieldIdentifierHarvest, harvesting.dateHarvest, harvesting.toteIdentifier])
  //   .then(result => {
  //     return result.rows[0];
  //   });
};


module.exports = { getHarvest, getHarvestbyId, createHarvest };