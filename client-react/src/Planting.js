import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';

export default function Planting(props) {
  const [field_id, setFieldId] = useState("");
  const [crop_type, setCropType] = useState("");
  const [date_fertilized, setDateFertilized] = useState("");
  const [fertilizer_pesticides_applied, setFertilizerPesticideApplied] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/planting", {
      planting: {
        field_id, crop_type, date_fertilized, fertilizer_pesticides_applied
      }
    }).then(response => {
      console.log("Krista was HERE!!!!")
      props.addItemToState("plantingItems", response.data)
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
        <TextField id="outlined-basic" label="Field Identifier" variant="outlined" value={field_id} onChange={(event) => setFieldId(event.target.value)} />

        <TextField id="outlined-basic" label="Crop Type" variant="outlined" value={crop_type} onChange={(event) => setCropType(event.target.value)} />

        <TextField id="outlined-basic" label="Date Fertilized" variant="outlined" value={date_fertilized} onChange={(event) => setDateFertilized(event.target.value)} />

        <TextField id="outlined-basic" label="Fertilizer Pesticides Applied" variant="outlined" value={fertilizer_pesticides_applied} onChange={(event) => setFertilizerPesticideApplied(event.target.value)} />

        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>

      {/* <Button style={{ backgroundColor: 'blue' }} variant="submit" onClick={handleUsers}>Users</Button>
   */}
    </>

  );
}