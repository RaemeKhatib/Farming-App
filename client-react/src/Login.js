import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value: ", email);
  };

  return (
    <>
      <p>Login</p>

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
        <Button style={{ backgroundColor: 'red' }} variant="submit" onClick={handleSubmit}>Submit</Button>
      </Box>

    </>

  );
}

