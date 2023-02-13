import { useParams, useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';


export default function SummaryEditPlanting(props) {
  const [plantData, setPlantData] = useState([]);
  const { plant_id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    console.log("THIS IS PLANT ID", plant_id);
    Promise.all([
      axios.get(`/summary/planting/${plant_id}`),

    ]).then((res) => {
      console.log("ONLY PLANTING EDIT ", res);
      setPlantData(res[0].data);

    });

  }, [plant_id]);

  const handleEdit = (event) => {
    event.preventDefault();
    axios.put(`/summary/planting/${plant_id}`)
      .then(response => {
        console.log("TRYING TO EDIT ON SUMMARY/EDIT PAGE", response);
      });
  };


  return (

    <Box mt={2} >
      <h1>Summary</h1>

      <h3>Plant</h3>

      <Button style={{ backgroundColor: 'transparent',borderRadius: '20px', border: '2px solid pink', color: 'pink', textAlign: 'right' }} onClick={handleEdit}>Edit</Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Field ID</TableCell>
              <TableCell align="right">{plantData.field_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Crop Type</TableCell>
              <TableCell align="right">{plantData.crop_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date Fertilized</TableCell>
              <TableCell align="right">{plantData.date_fertilized}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fertilizer/Persticides Applied</TableCell>
              <TableCell align="right">{plantData.fertilizer_pesticides_applied}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <div className="login" >

      </div>

    </Box>

  );
}