 const express = require("express");
const router = express.Router()
const plantingQueries = require('../db/queries/planting');
const plantingRoutes = require('../routes/planting')
const app = express();


router.get("/", (req, res) => {
  plantingQueries.getPlanting()

    .then(data => {
      console.log("data", data);
      res.json(data);
    });

});

router.get("/:id", (req, res) => {
  plantingQueries.getPlantingbyId(req.params.id)

    .then(data => {
      console.log("data", data);
      res.json(data);
    });
});

router.post('/', (req, res) => {
  console.log('HEY PLANTING', req.body)
  plantingQueries.createPlanting(req.body.planting)
    .then((planting) => {
      console.log(planting);
      res.send(planting);
    }).catch((err) => {
      res.status(500)
     res.send({ error: err.message });
    });
    
});


module.exports = router