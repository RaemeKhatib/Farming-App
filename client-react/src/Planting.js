import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Planting(props) {
  const navigate = useNavigate();
  const [field_id, setFieldId] = useState("");
  const [crop_type, setCropType] = useState("");
  const [date_fertilized, setDateFertilized] = useState("");
  const [fertilizer_pesticides_applied, setFertilizerPesticideApplied] = useState("");

  const [listOfPlants, setListOfPlants] = useState([]);

  useEffect(() => {
    console.log('props', props);
    axios.get('/planting')
      .then((res) => {
        setListOfPlants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/planting", {
      planting: {
        field_id, crop_type, date_fertilized, fertilizer_pesticides_applied
      }
    }).then(response => {
      console.log("Krista was HERE!!!!");
      props.addItemToState("plantingItems", response.data);
      setListOfPlants((prev) => [...prev, response.data]);
      navigate(`/`);
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
        <h2>Planting</h2>
        <TextField id="outlined-basic" label="Field Identifier" variant="outlined" value={field_id} onChange={(event) => setFieldId(event.target.value)} />

        <TextField id="outlined-basic" label="Crop Type" variant="outlined" value={crop_type} onChange={(event) => setCropType(event.target.value)} />

        <TextField id="outlined-basic" label="Date Fertilized" variant="outlined" value={date_fertilized} onChange={(event) => setDateFertilized(event.target.value)} />

        <TextField id="outlined-basic" label="Fertilizer Pesticides Applied" variant="outlined" value={fertilizer_pesticides_applied} onChange={(event) => setFertilizerPesticideApplied(event.target.value)} />

        <Button style={{ backgroundColor: 'transparent', borderRadius: '20px', border: '2px solid green', color: 'green', textAlign: 'right' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>


      <div className="login3" >

      </div>
    </>

  );
};