import 'App.css';
import axios from 'axios';
import Navbar from 'Navbar';
import Home from 'Home';
import Harvest from 'Harvesting';
import Packing from 'Packing';
import Shipping from 'Shipping';
import Planting from 'Planting';
import Summary from 'Summary';
import Login from 'Login';


import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import logo from './images/organicfarms.jpg';

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

  useEffect(() => {
    axios.get('/planting')
      .then((res) => {
        console.log('planting', res.data);
        setState(prev => ({ ...prev, plantingItems: res.data }));
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios.get('/harvesting')
      .then((res) => {
        console.log('harvesting', res.data);
        setState(prev => ({ ...prev, harvestingItems: res.data }));
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios.get('/packing')
      .then((res) => {
        console.log('packing', res.data);
        setState(prev => ({ ...prev, packingItems: res.data }));
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios.get('/shipping')
      .then((res) => {

        setState(prev => ({ ...prev, shippingItems: res.data })); // just 
      })
      .catch((err) => {
        console.log(err.message);
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
      <div id="topBlackBar">
      </div>
      <div className="black-bar"></div>
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
          <Route path="/harvest/:plant_id" element={
            <Harvest
              plantingItems={state.plantingItems}
              harvestingItems={state.harvestingItems}
              addItemToState={addItemToState}
            />} />
          <Route path="/packing/:plant_id" element={
            <Packing
              plantingItems={state.plantingItems}
              addItemToState={addItemToState} />} />
          <Route path="/shipping/:plant_id" element={
            <Shipping
              plantingItems={state.plantingItems}
              addItemToState={addItemToState} />} />
          <Route path="/login" element={<Login />} />

          <Route path="/summary/:plant_id" element={<Summary
            setState={setState} />} />

        </Routes>
      </div>

    </div>



  );
}