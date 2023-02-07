import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';
import './styles.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value: ", email);
  };

  const handleUsers= (event) => {
    event.preventDefault();
    axios.get("/test")
    .then(users => {
      console.log("Form submitted with value: ", users);
    })
    
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
        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>
        
      </Box>

      <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleUsers}>Users</Button>
        <div className="login">

        </div>
        
    </>
        
  );
}

