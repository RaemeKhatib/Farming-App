import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';
import './styles.css';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async event => {
    event.preventDefault();
    console.log("LOGIN HANDLE SUBMIT CONSOLELOG ", email);
navigate('/')

  };

  // const handleUsers = (event) => {
  //   event.preventDefault();
  //   axios.get("/test")
  //     .then(users => {
  //       console.log("Form submitted with value: ", users);
  //     });

  // };

  return (
    <>
      <div className="login-wrapper"><h1>Please Log In</h1></div>
      <Box
        component="form" onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
          <VisibilityIcon style={{ marginLeft: 8 }} />
        </div>
        <Button style={{ 
  backgroundColor: 'transparent', 
  border: '2px solid green', 
  color: 'green', 
  fontFamily: '"Permanent Marker", cursive', 
  borderRadius: '20px', 
}} variant="submit" onClick={handleSubmit}>Submit</Button>
      </Box>
      <div className="login" ></div>
    </>
  );
}
