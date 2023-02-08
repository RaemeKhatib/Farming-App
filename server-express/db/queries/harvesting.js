// const { get } = require('../../routes/planting');
const db = require('../connection');


const getHarvest = () => {
  console.log("Harvesting")
  return db.query(`SELECT id, farm_worker, date_harvest, tote_id FROM harvest;`)
    .then(data => {
      console.log('harvest data', data)
      return data.rows;
    });

};

const getHarvestbyId = (id) => {
  return db.query(`SELECT * FROM harvest WHERE id = $1;`, [id])
    .then(result => {
      return result.rows[0];
    });
};



const createHarvest = (harvesting) => {
  console.log('harvesting update', harvesting)

  return db.query(`INSERT INTO harvest (
    plant_id,
    farm_worker,
    date_harvest,
    tote_id
    
  )VALUES ($1, $2, $3, $4) RETURNING *;`, [harvesting.plant_id, harvesting.farm_worker, harvesting.date_harvest, harvesting.tote_id])
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