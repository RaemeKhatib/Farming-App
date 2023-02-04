
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';

export default function packing() {
  const [datePacking, setDatePacking] = useState("");
  const [productUnit, setProductUnit] = useState("");
  const [productUnitPacked, setProductUnitPacked] = useState("");
  const [farmerWorkerIdentifier, setfarmerWorkerIdentifier] = useState("");
  const [lotIdentifier, setLotIdentifier] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value: ", fieldIdentifier); //need to change later due to not being a value here
  };

  // const handleUsers= (event) => {
  //   event.preventDefault();
  //   axios.get("/test")
  //   .then(users => {
  //     console.log("Form submitted with value: ", users);
  //   })
    
  // };

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
        <TextField id="outlined-basic" label="Date Packing" variant="outlined" value={datePacking} onChange={(event) => setDatePacking(event.target.value)} />

        <TextField id="outlined-basic" label="Product Unit" variant="outlined" value={productUnit} onChange={(event) => setProductUnit(event.target.value)} />

        <TextField id="outlined-basic" label="Product Unit Packed" variant="outlined" value={productUnitPacked} onChange={(event) => setProductUnitPacked(event.target.value)} />

        <TextField id="outlined-basic" label="Farmer Worker Identifier" variant="outlined" value={farmerWorkerIdentifier} onChange={(event) => setFarmerWorkerIdentifier(event.target.value)} />

        <TextField id="outlined-basic" label="Lot Identifier" variant="outlined" value={lotIdentifier} onChange={(event) => setLotIdentifier(event.target.value)} />




        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>
        
      </Box>

      {/* <Button style={{ backgroundColor: 'blue' }} variant="submit" onClick={handleUsers}>Users</Button>
   */}
    </>
        
  );
}