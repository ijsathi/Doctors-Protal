import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';
import { useHistory,useLocation } from "react-router-dom";


const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {authErr, user , loginUser, isLoading} = useAuth();

    const location = useLocation()
    const history = useHistory();


    const handleOnchange = e =>{
    const field = e.target.field;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field]= value;
    setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password , location, history)
        // alert('DONE✅')
        e.preventDefault();
    }
    return (
        <Container>
            <Navigation></Navigation>
            <Grid container spacing={2}>
                <Grid sx={{mt:8, textAlign:"center"}}  item xs={12} md={6} sm={4}>
                 <Typography variant='body1' gutterBottom >
                     Login
                 </Typography>
                 <form onSubmit={handleLoginSubmit}>
                 <TextField
                  sx={{width:'75%', m:1}}
                  id="standard-basic"
                  label="User email"
                  name='email'
                  onChange={handleOnchange}
                  variant="standard" />
                  <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleOnchange}
                    variant="standard"
                  />
                  <Button style={{backgroundColor:'#60E2E3'}} sx={{width:'75%', m:1}} variant='contained' type='submit'>
                      Login
                  </Button>
                  <NavLink 
                    style={{textDecoration:'none'}}
                    to='/register'>
                      <Button variant='text'>New user? Please register</Button>
                  </NavLink> 
                 </form>
                 {
                   isLoading && <LinearProgress />
                 }
                 {
                   user?.email && <Alert severity="success">Congress! You are Success</Alert>
                 }
                 {
                   authErr && <Alert severity="error">{authErr}</Alert>
                 }
                </Grid>
                <Grid item xs={12}  md={6} sm={4}>
                  <img style={{width:'100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;