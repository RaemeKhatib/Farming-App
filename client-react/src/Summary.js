import { useParams, useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, TextField } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';


const CellFormatter = ({ isEdit, value, cellTitle, setData, formName, isInt }) => {
  const [textValue, settextValue] = useState(value);
  const { plant_id } = useParams();
  const handleChange = (event) => {
    settextValue(event.target.value);
  };

  const handleBlur = (event) => {
    if(textValue.length === 0) return 
    axios.put(`/summary/${formName}/${plant_id}`, { [cellTitle]: textValue }).then((res) => {
      console.log("THIS IS THE RES FOR SOMETHING ", res);
      setData(res.data);
    });
  };

  return (
    <>
      {!isEdit && <span> {value} </span>}
      {isEdit && <TextField type={isInt ? "number": "text" } 
      value={textValue} 
      onChange={handleChange}
      onBlur={handleBlur} />}
    </>
  );
};



export default function Summary(props) {
  const [plantData, setPlantData] = useState([]);
  const [harvestData, setHarvestData] = useState([]);
  const [packData, setPackData] = useState([]);
  const [shipData, setShipData] = useState([]);
  const [isEdit, setisEdit] = useState(false);


  const { plant_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      axios.get(`/summary/planting/${plant_id}`),
      axios.get(`/summary/harvesting/${plant_id}`),
      axios.get(`/summary/packing/${plant_id}`),
      axios.get(`/summary/shipping/${plant_id}`),

    ]).then((res) => {
      console.log("Multiple Promises ", res);
      setPlantData(res[0].data);
      setHarvestData(res[1].data);
      setPackData(res[2].data);
      setShipData(res[3].data);
    });

  }, [plant_id]);

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete("/summary", {
      data: { summary: plant_id }
    }).then(response => {
      console.log("RESPONSE!!!!", response.data);
      Promise.all([
        axios.get('/planting'),
        axios.get('/harvesting'),
        axios.get('/packing'),
        axios.get('/shipping')
      ]).then((res) => {
        console.log('WHOLE RESPONSE OBJ', res);
        props.setState(prev => ({
          ...prev,
          plantingItems: res[0].data,
          harvestingItems: res[1].data,
          packingItems: res[2].data,
          shippingItems: res[3].data,

        }));
        navigate(`/`);

      }).catch((err) => {
        console.log(err.message);
      });
    });
  };


  return (

    <Box mt={2} >
      <h1>Summary</h1>


      <h3>Plant</h3>

      <TableContainer component={Paper} style={{ width: 750, height: 300 }}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table" >
          <TableHead>
            <TableRow>
            <TableCell align="right" />
              <Button variant='contained' style={{ backgroundColor: 'transparent',borderRadius: '20px', border: '2px solid green', color: 'green', textAlign: 'right' }} onClick={() => setisEdit(prev => !prev)}  >
                {isEdit ? "Save" : "Edit"}
              </Button>
            </TableRow>
            <TableRow>
              <TableCell>Field ID</TableCell>
              <TableCell align="right" onClick={() => console.log("BUTTON ISNT CLICKING")}>
                <CellFormatter
                  value={plantData.field_id}
                  isEdit={isEdit}
                  cellTitle={"field_id"}
                  setData={setPlantData}
                  formName="planting" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Crop Type</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={plantData.crop_type}
                  isEdit={isEdit}
                  cellTitle={"crop_type"}
                  setData={setPlantData}
                  formName="planting" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date Fertilized</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={plantData.date_fertilized}
                  isEdit={isEdit}
                  cellTitle={"date_fertilized"}
                  setData={setPlantData}
                  formName="planting" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fertilizer/Persticides Applied</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={plantData.fertilizer_pesticides_applied}
                  isEdit={isEdit}
                  cellTitle={"fertilizer_pesticides_applied"}
                  setData={setPlantData}
                  formName="planting" />
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <h3>Harvest</h3>

      <TableContainer component={Paper} style={{ width: 750, height: 300 }}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="right" />
              <Button variant='contained' style={{ backgroundColor: 'transparent',borderRadius: '20px', border: '2px solid green', color: 'green', textAlign: 'right' }} onClick={() => setisEdit(prev => !prev)}  >
                {isEdit ? "Save" : "Edit"}
              </Button>
            </TableRow>
            <TableRow>
              <TableCell>Farm Worker</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={harvestData.farm_worker}
                  isEdit={isEdit}
                  cellTitle={"farm_worker"}
                  setData={setHarvestData}
                  formName="harvesting" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date of Harvest</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={harvestData.date_harvest}
                  isEdit={isEdit}
                  cellTitle={"date_harvest"}
                  setData={setHarvestData}
                  formName="harvesting" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tote Id</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={harvestData.tote_id}
                  isEdit={isEdit}
                  cellTitle={"tote_id"}
                  setData={setHarvestData}
                  formName="harvesting"
                  isInt={true}/>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <h3>Packing</h3>

      <TableContainer component={Paper} style={{ width: 750, height: 300 }}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="right" />
              <Button variant='contained' style={{ backgroundColor: 'transparent',borderRadius: '20px', border: '2px solid green', color: 'green', textAlign: 'right' }} onClick={() => setisEdit(prev => !prev)}  >
                {isEdit ? "Save" : "Edit"}
              </Button>
            </TableRow>
            <TableRow>
              <TableCell>Date of Packing</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={packData.date_pack}
                  isEdit={isEdit}
                  cellTitle={"date_pack"}
                  setData={setPackData}
                  formName="packing" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Unit</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={packData.product_unit}
                  isEdit={isEdit}
                  cellTitle={"product_unit"}
                  setData={setPackData}
                  formName="packing" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Unit Amount</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={packData.product_unit_amount}
                  isEdit={isEdit}
                  cellTitle={"product_unit_amount"}
                  setData={setPackData}
                  formName="packing" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Farm Worker</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={packData.farm_worker}
                  isEdit={isEdit}
                  cellTitle={"farm_worker"}
                  setData={setPackData}
                  formName="packing" />
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <h3>Shipping</h3>
      <TableContainer component={Paper} style={{ width: 750, height: 300 }}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="right" />
            <Button variant='contained' style={{ backgroundColor: 'transparent',borderRadius: '20px', border: '2px solid green', color: 'green', textAlign: 'right' }} onClick={() => setisEdit(prev => !prev)}  >
                {isEdit ? "Save" : "Edit"}
              </Button>
            </TableRow>
            <TableRow>
              <TableCell>Purchase Order Number</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={shipData.purchase_order_number}
                  isEdit={isEdit}
                  cellTitle={"purchase_order_number"}
                  setData={setShipData}
                  formName="shipping" 
                  isInt={true}/>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Buyer Name</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={shipData.buyer_name}
                  isEdit={isEdit}
                  cellTitle={"buyer_name"}
                  setData={setShipData}
                  formName="shipping" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ship Date</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={shipData.ship_date}
                  isEdit={isEdit}
                  cellTitle={"ship_date"}
                  setData={setShipData}
                  formName="shipping" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ship Amount</TableCell>
              <TableCell align="right">
                <CellFormatter
                  value={shipData.ship_amount}
                  isEdit={isEdit}
                  cellTitle={"ship_amount"}
                  setData={setShipData}
                  formName="shipping" />
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Button variant='contained' style={{ backgroundColor: 'transparent',borderRadius: '20px', border: '2px solid red', color: 'red', textAlign: 'right' }} onClick={handleDelete}>Delete All Fields</Button>
      <div className="login" >

      </div>
    </Box>

  );
}

//adding comment