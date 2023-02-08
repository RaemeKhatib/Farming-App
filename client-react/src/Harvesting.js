import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';
import Planting from 'Planting';
import { areDayPropsEqual } from '@mui/x-date-pickers/internals';
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Harvesting(props) {
  const [farm_worker, setFarmWorker] = useState("");
  const [date_harvest, setDateHarvest] = useState("");
  const [tote_id, setToteId] = useState("");
  const [plant_id, setPlantId] = useState("");
  //need a button to generate a harvest code here on page

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/harvesting", {
      harvesting: {
       plant_id, farm_worker, date_harvest, tote_id
      }

    });
  };

  const cropDisplay = props.plantingItems.map(item => {
    return (
      <MenuItem key={item.id} 
        value={item.id}>
        {item.crop_type}
      </ MenuItem>
    );
  });

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
        
        <FormControl fullWidth>
      <InputLabel id="plant">Plant</InputLabel>
      <Select
        labelId="plant"
        id="plant-select"
        value={plant_id}
        label="Plant"
        onChange={(event) => setPlantId(event.target.value)}
      >
       {cropDisplay}
      </Select>
    </FormControl>

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