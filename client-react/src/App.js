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
    shippingItems: [],
    plantingItems:[],
    harvestingItems: [],
  })

  
  // setState({...state, shippingItems})
  


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
          <Route path="/" element={<Home shippingItems={state.shippingItems} plantingItems={state.plantingItems} harvestingItems={state.harvestingItems} setState={setState}/>} />
          <Route path="/planting" element={<Planting />} />
          <Route path="/harvest" element={<Harvest />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/packing" element={<Packing />} />
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