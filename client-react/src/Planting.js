import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';

export default function Planting() {
  const [fieldIdentifier, setFieldIdentifier] = useState("");
  const [dateFertilizer, setDateFertilizer] = useState("");
  const [farmWorkerIdentifier, setFarmWorkerIdentifier] = useState("");
  const [fertilizerPesticide, setFertilizerPesticide] = useState("");
  const [cropType, setCropType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/planting", {
      planting: {
        fieldIdentifier, dateFertilizer, fertilizerPesticide, farmWorkerIdentifier, cropType
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
        <TextField id="outlined-basic" label="Field Identifier" variant="outlined" value={fieldIdentifier} onChange={(event) => setFieldIdentifier(event.target.value)} />

        <TextField id="outlined-basic" label="Date Fertilizer" variant="outlined" value={dateFertilizer} onChange={(event) => setDateFertilizer(event.target.value)} />

        <TextField id="outlined-basic" label="Fertilizer or Pesticide Applied" variant="outlined" value={fertilizerPesticide} onChange={(event) => setFertilizerPesticide(event.target.value)} />

        <TextField id="outlined-basic" label="Farm Worker Identifier" variant="outlined" value={farmWorkerIdentifier} onChange={(event) => setFarmWorkerIdentifier(event.target.value)} />

        <TextField id="outlined-basic" label="Crop Type" variant="outlined" value={cropType} onChange={(event) => setCropType(event.target.value)} />

        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>

      {/* <Button style={{ backgroundColor: 'blue' }} variant="submit" onClick={handleUsers}>Users</Button>
   */}
    </>

  );
}