import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import { datePickerToolbarClasses } from "@mui/x-date-pickers";


export default function Summary() {
  const [data, setData] = useState([]);
  const { plant_id } = useParams();
  console.log(plant_id);

  useEffect(() => {
    axios.get(`/summary/${plant_id}`)   // might want to change to field id
      .then((res) => {
        
        console.log("SUMMARY CALL DATA", res.data);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // let results = [];
  // if(data.length > 0){
  //   results = data.map(())
  // }

  return (

    <Box mt={4} >
      <h1>Summary</h1>
      <h3>HARVEST</h3>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Farm Worker</TableCell>
              <TableCell>{data.farm_worker}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date of Harvest</TableCell>
              <TableCell>{data.date_harvest}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tote Id</TableCell>
              <TableCell>{data.tote_id}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {/* <TableRow
              key={harvests.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {harvests.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {harvests.field_id}
              </TableCell>
              <TableCell align="right">{harvests.farm_worker}</TableCell>
              <TableCell align="right">{harvests.date_harvest}</TableCell>
              <TableCell align="right">{harvests.tote_id}</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>


  );




}