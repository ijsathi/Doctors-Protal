import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData] = useState({});
    const history = useHistory();
    const {authErr, user , registerUser, isLoading} = useAuth();

    const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field]= value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert("password didn't match")
            return
        }
        registerUser( loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
          <Navigation></Navigation>
        <Grid container spacing={2}>
            <Grid sx={{mt:8, textAlign:"center"}}  item xs={12} md={6} sm={4}>
             <Typography variant='body1' gutterBottom >
                Register
             </Typography>
          {
             !isLoading && <form onSubmit={handleLoginSubmit}>
             <TextField
              sx={{width:'75%', m:1}}
              id="standard-basic"
              label="User name"
              name='name'
              onBlur={handleOnBlur}
              variant="standard" />
              <TextField
              sx={{width:'75%', m:1}}
              id="standard-basic"
              label="User email"
              type='email'
              name='email'
              onBlur={handleOnBlur}
              variant="standard" />
              <TextField
                sx={{width:'75%', m:1}}
                id="standard-basic"
                label="Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{width:'75%', m:1}}
                id="standard-basic"
                label="Re-Type Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <Button style={{backgroundColor:'#60E2E3'}} sx={{width:'75%', m:1}} variant='contained' type='submit'>
                  Register
              </Button>
              <NavLink 
                style={{textDecoration:'none'}}
                to='/login'>
                  <Button variant='text'>Already registered? Please Login</Button>
              </NavLink> 
             </form>
          }
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

export default Register;