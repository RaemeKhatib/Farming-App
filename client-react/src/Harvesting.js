import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { MenuItem } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";



export default function Harvesting(props) {
  const { plant_id } = useParams();
  const navigate = useNavigate();
  const [farm_worker, setFarmWorker] = useState("");
  const [date_harvest, setDateHarvest] = useState("");
  const [tote_id, setToteId] = useState("");
  //need a button to generate a harvest code here on page

  const [listOfHarvests, setListOfHarvests] = useState([]);

  useEffect(() => {
    console.log('props', props);
    axios.get('/harvesting')
      .then((res) => {
        setListOfHarvests(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/harvesting", {
      harvesting: {
        plant_id, farm_worker, date_harvest, tote_id
      }

    }).then(response => {
      console.log("RESPONSE / DATA!!!!", response.data);
      props.addItemToState("harvestingItems", response.data);
      setListOfHarvests((prev) => [...prev, response.data]);
      navigate(`/summary/${plant_id}`);
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
        <h2>Harvesting</h2>

        <TextField id="outlined-basic" label="Farm Worker" variant="outlined" value={farm_worker} onChange={(event) => setFarmWorker(event.target.value)} />

        <TextField id="outlined-basic" label="Date Harvest" variant="outlined" value={date_harvest} onChange={(event) => setDateHarvest(event.target.value)} />

        <TextField id="outlined-basic" label="Tote Identifier" variant="outlined" value={tote_id} onChange={(event) => setToteId(event.target.value)} />


        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>

    </>

  );
}