import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';

export default function Shipping() {
  const [farmWorkerHarvesting, setFarmWorkerHarvesting] = useState("");
  const [cropType, setCropType] = useState("");
  const [fieldIdentifierHarvest, setFieldIdentifierHarvest] = useState("");
  const [dateHarvest, setDateHarvest] = useState("");
  const [toteIdentifier, setToteIdentifier] = useState("");
  //need a button to generate a harvest code here on page

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value: ", fieldIdentifier); //need to change later due to not being a value in shipping.js
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
        <TextField id="outlined-basic" label="Farm Worker Harvesting" variant="outlined" value={farmWorkerHarvesting} onChange={(event) => setFarmWorkerHarvesting(event.target.value)} />

        <TextField id="outlined-basic" label="Crop Type" variant="outlined" value={cropType} onChange={(event) => setCropType(event.target.value)} />

        <TextField id="outlined-basic" label="Field Identifier Harvest" variant="outlined" value={fieldIdentifierHarvest} onChange={(event) => setFieldIdentifierHarvest(event.target.value)} />

        <TextField id="outlined-basic" label="Date of Harvest" variant="outlined" value={dateHarvest} onChange={(event) => setDateHarvest(event.target.value)} />

        <TextField id="outlined-basic" label="Tote Identifier" variant="outlined" value={toteIdentifier} onChange={(event) => setToteIdentifier(event.target.value)} />

        




        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>
        
      </Box>


      {/* <Button style={{ backgroundColor: 'blue' }} variant="submit" onClick={handleUsers}>Users</Button>
   */}
    </>
        
  );
}