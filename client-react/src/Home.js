import React, { useEffect, Fragment, useState } from "react";
import axios from "axios";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from "react-router-dom";
import GrassIcon from '@mui/icons-material/Grass';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export default function Home({
  plantingItems,
  harvestingItems,
  packingItems,
  shippingItems,
  setState
}) {
  // const [shippingItems, setShippingItems] = useState([]);
  // const [plantingItems, setPlantingItems] = useState([]);
  // const [harvestingItems, setHarvestingItems] = useState([]);


  const plantingDisplay = plantingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Field Id: {item.field_id}</div>
        <div>Crop Type: {item.crop_type}</div>
        <div>Date Fertilized: {item.date_fertilized}</div>
        <div>Fertilizers/Pesticides Applied: {item.fertilizer_pesticides_applied}</div>
      </ Fragment>
    );
  });

  const harvestingDisplay = harvestingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Crop Type: {item.crop_type}</div>
        <div>Farm Worker: {item.farm_worker}</div>
        <div>Date Harvest: {item.date_harvest}</div>
        <div>Tote Id: {item.tote_id}</div>
      </ Fragment>
    );
  });

  const packingDisplay = packingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Packing Date: {item.date_pack}</div>
        <div>product Unit: {item.product_unit}</div>
        <div>Product Unit Amount: {item.product_unit_amount}</div>
        <div>Farm Worker: {item.farm_worker}</div>
      </ Fragment>
    );
  });
  const shippingDisplay = shippingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Purchase Order Number: {item.purchase_order_number}</div>
        <div>Buyer Name: {item.buyer_name}</div>
        <div>Ship Date: {item.ship_date}</div>
        <div>Ship Amount: {item.ship_amount}</div>
      </ Fragment>
    );
  });

  console.log("planting", plantingItems[0]);
  console.log('harvesting', harvestingItems[0]);

  return (
    <>
    
      <Box mb={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Field ID</TableCell>
                <TableCell align="right">Crop Type <GrassIcon /></TableCell>
                <TableCell align="right">Harvest <AgricultureIcon /></TableCell>
                <TableCell align="right">Pack <Inventory2Icon /></TableCell>
                <TableCell align="right">Ship <LocalShippingIcon /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {plantingItems.map((plantItem) => (
                <TableRow
                  key={plantItem.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={`/summary/${plantItem.id}`}>
                      <Button style={{ backgroundColor: 'red', color: 'white', fontFamily: '"Permanent Marker", cursive' }}
                        variant='contained' color='primary'
                      >
                        Summary
                      </Button>
                    </Link>
                    </TableCell>
                    
                  <TableCell component="th" scope="row">{plantItem.field_id}
                  </TableCell>
                  <TableCell align="right">{plantItem.crop_type}</TableCell>
                  
                  <TableCell align="right">
                    <Link to={`/harvest/${plantItem.id}`}>
                      <Button style={{ backgroundColor: 'orange', color: 'white', fontFamily: '"Permanent Marker", cursive' }}
                        variant='contained' color='success'
                        disabled={harvestingItems.find(x => x.plant_id == plantItem.id) ? true : false}
                      >
                        Harvest
                      </Button >
                    </Link>
                  </TableCell>

                  <TableCell align="right">
                    <Link to={`/packing/${plantItem.id}`}>
                      <Button style={{ backgroundColor: 'blue', color: 'white', fontFamily: '"Permanent Marker", cursive' }}
                        variant='contained' color='info'
                        disabled={packingItems.find(x => x.plant_id == plantItem.id) ? true : false}
                      >
                        Pack
                      </Button>
                    </Link>

                  </TableCell>
                  <TableCell align="right">
                    <Link to={`/shipping/${plantItem.id}`}>
                      <Button style={{ backgroundColor: 'purple', color: 'white', fontFamily: '"Permanent Marker", cursive' }}
                        variant='contained' color='secondary'
                        disabled={shippingItems.find(x => x.plant_id == plantItem.id) ? true : false}
                      >
                        Ship
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <div className="login" >

</div>
    </>
  );
  
}