import 'App.css';
import axios from 'axios';
import Navbar from 'Navbar';
import Home from 'Home';
import Harvest from 'Harvesting';
import Packing from 'Packing';
import Shipping from 'Shipping';
import Planting from 'Planting';
import Login from 'Login';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [status, setStatus] = useState({});
  const [state, setState] = useState({

    plantingItems: [],
    harvestingItems: [],
    packingItems: [],
    shippingItems: []
  });

  const addItemToState = (key, value) => {
    setState((prev) => {
      return { ...prev, [key]: [...state[key], value] };
    });
  };

  // setState({...state, shippingItems})
  useEffect(() => {
    axios.get('/planting')
      .then((res) => {
        console.log('planting', res.data);
        setState(prev => ({ ...prev, plantingItems: res.data }));
        // setPlantingItems(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        // setPlantingItems({ error: err.message });
      });

    axios.get('/harvesting')
      .then((res) => {
        console.log('harvesting', res.data);
        setState(prev => ({ ...prev, harvestingItems: res.data }));
        // setHarvestingItems(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        // setHarvestingItems({ error: err.message });
      });

    axios.get('/packing')
      .then((res) => {
        console.log('packing', res.data);
        setState(prev => ({ ...prev, packingItems: res.data }));
        // setPackingItems(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        // setPackingItems({ error: err.message });
      });

    axios.get('/shipping')
      .then((res) => {
        console.log('shipping', res.data);
        setState(prev => ({ ...prev, shippingItems: res.data })); // just update shippingItems and leave plantingItems, harvestingItems, the same
        // setShippingItems(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        // setShippingItems({ error: err.message });
      });
  }, []);


  useEffect(() => {
    axios.get('/api/status')
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => {
        setStatus({ error: err.message });
      });
  }, []);

  return (
    <div className="App">

      {/* <h1>Farming Community!!</h1> */}

      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home
            shippingItems={state.shippingItems}
            plantingItems={state.plantingItems}
            harvestingItems={state.harvestingItems}
            packingItems={state.packingItems}
            setState={setState} />} />
          <Route path="/planting" element={<Planting
            addItemToState={addItemToState} />} />
          <Route path="/harvest" element={
            <Harvest
              plantingItems={state.plantingItems}
              harvestingItems={state.harvestingItems}
              addItemToState={addItemToState}
            />} />
          <Route path="/packing" element={
          <Packing
            plantingItems={state.plantingItems}
            addItemToState={addItemToState} />} />
          <Route path="/shipping" element={
          <Shipping
            plantingItems={state.plantingItems}
            addItemToState={addItemToState} />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>


      {/* <section>
        {!status.error &&
          <>API Version: <code>{status.version}</code></>}
        {status.error &&
          <>API Error: <code>{status.error}</code></>}
      </section> */}
    </div>
  );
}