
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';

export default function packing() {
  const [date_pack, setDatePack] = useState("");
  const [product_unit, setProductUnit] = useState("");
  const [product_unit_amount, setProductUnitAmount] = useState("");
  const [farm_worker, setFarmWorker] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/packing", {
      packing: {
        date_pack, product_unit, product_unit_amount, farm_worker
      }
    });
  };


  return (

    <>
      <Box
        component="form" onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Packing Date" variant="outlined" value={date_pack} onChange={(event) => setDatePack(event.target.value)} />

        <TextField id="outlined-basic" label="Product Unit" variant="outlined" value={product_unit} onChange={(event) => setProductUnit(event.target.value)} />

        <TextField id="outlined-basic" label="Product Unit Amount" variant="outlined" value={product_unit_amount} onChange={(event) => setProductUnitAmount(event.target.value)} />

        <TextField id="outlined-basic" label="Farmer Worker" variant="outlined" value={farm_worker} onChange={(event) => setFarmWorker(event.target.value)} />

        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>

      {/* <Button style={{ backgroundColor: 'blue' }} variant="submit" onClick={handleUsers}>Users</Button>
   */}
    </>

  );
}