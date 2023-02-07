import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';

export default function Harvesting() {
  const [crop_type, setCropType] = useState("");
  const [farm_worker, setFarmWorker] = useState("");
  const [date_harvest, setDateHarvest] = useState("");
  const [tote_id, setToteId] = useState("");
  //need a button to generate a harvest code here on page

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/harvesting", {
      harvesting: {
        crop_type, farm_worker, date_harvest, tote_id
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
        <TextField id="outlined-basic" label="Crop Type" variant="outlined" value={crop_type} onChange={(event) => setCropType(event.target.value)} />

        <TextField id="outlined-basic" label="Farm Worker" variant="outlined" value={farm_worker} onChange={(event) => setFarmWorker(event.target.value)} />

        <TextField id="outlined-basic" label="Date Harvest" variant="outlined" value={date_harvest} onChange={(event) => setDateHarvest(event.target.value)} />

        <TextField id="outlined-basic" label="Tote Identifier" variant="outlined" value={tote_id} onChange={(event) => setToteId(event.target.value)} />

      
        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>
        
      </Box>


      {/* <Button style={{ backgroundColor: 'blue' }} variant="submit" onClick={handleUsers}>Users</Button>
   */}
    </>
        
  );
}