import React from "react";
import { Avatar, Grid, Paper, TextField,Button, Typography,Link } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
const Login = () => {
  const paperStyle = {
    padding: 40,
    height: "50vh",
    width: 260,
    margin: "20px auto",
  };
  const buttonStyle= {
    margin: '20px auto'
  
  }
  const textStyle={
    margin: '10px auto'
  }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar>
            <LoginIcon />
          </Avatar>
          <h2>Sign In</h2>
          <TextField style={textStyle}label='username' placeholder='Enter username'/>
          <TextField label='password' placeholder='Enter password'/>

        </Grid>
        <Button style={buttonStyle} type='submit'color='primary' variant='contained'fullWidth>Sign in</Button>
        <Typography>Do you have an account? 
          <Link href="#">
             Sign up</Link>
        </Typography>
          
      
      </Paper>
    </Grid>
  );
};

export default Login;
