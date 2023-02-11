const express = require("express");
const router = express.Router();



// const fieldQueries = require('../db/queries/field');

const summaryQueries = require('../db/queries/summary');
// const harvestingRoutes = require('./harvesting');
// const app = express();



router.get("/planting/:id", (req, res) => {
  let id = req.params.id;

  summaryQueries.getPlanting(id)
    .then((data) => {
      res.json(data);
    });

});

router.get("/harvesting/:id", (req, res) => {
  let id = req.params.id;
 
  summaryQueries.getHarvest(id)
    .then((data) => {
      res.json(data);
    });

});

router.get("/packing/:id", (req, res) => {
  let id = req.params.id;
 
  summaryQueries.getPacking(id)
    .then((data) => {
      res.json(data);
    });

});


router.get("/shipping/:id", (req, res) => {
  let id = req.params.id;
  
  summaryQueries.getShipping(id)
    .then((data) => {
      res.json(data);
    });

});

router.delete('/', (req, res) => {
 
  summaryQueries.deleteHarvest(req.body.summary)
    .then(() => {
      res.status(202).send("Okay");
    }).catch((err) => {
      res.status(500).send({ error: err.message });
    });
});


router.put('/:formName/:id', (req, res) => {
  let id = req.params.id;
  let formName = req.params.formName;
  let table = "";
  if (formName === "planting") { table = "plant"; }
  else if (formName === "harvesting") { table = "harvest"; }
  else if (formName === "packing") { table = "pack"; }
  else if (formName === "shipping") { table = "ship"; }
  console.log("thisis for req.body!!!!", req.body)
  summaryQueries.updateTables(req.body, id, table)
    .then((data) => {
      res.json(data);
    });
});



module.exports = router;