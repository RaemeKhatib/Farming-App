const express = require("express");
const router = express.Router()
const harvestingQueries = require('../db/queries/harvesting');
const harvestingRoutes = require('../routes/harvesting')
const app = express();


router.get("/", (req, res) => {
  harvestingQueries.getHarvest()
    .then(data => {
      console.log("harvesting data", data);
      res.json(data);
    });

});

router.get("/:id", (req, res) => {
  harvestingQueries.getHarvestbyId(req.params.id)

    .then(data => {
      console.log("data", data);
      res.json(data);
    });
});

router.post('/', (req, res) => {
  console.log('HEY Harvesting', req.body)
  harvestingQueries.createHarvest(req.body.harvesting)
    .then((harvesting) => {
      console.log(harvesting);
      res.send("Your harvesting Information has been added.");
    });
});


module.exports = router