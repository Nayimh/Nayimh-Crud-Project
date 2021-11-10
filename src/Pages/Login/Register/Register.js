import { Alert, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logimg from '../../../images/banner2.jpg'

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { registerUser, isLoading, user, authError } = useAuth();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not matched');
            e.preventDefault();
            return;
        }
        registerUser( loginData.email, loginData.password)
        e.preventDefault();
    }

    return (
        <div>
            <Container >
               
               <Grid container spacing={2} sx={{placeItems: "center"}}>
                   <Grid item xs={12} sm={12} md={6} >
                       <Typography variant="h4">Register</Typography>
                       
                        {!isLoading &&
                            <form onSubmit={handleLoginSubmit}>
                           <TextField onChange={handleOnchange} id="standard-basic" name="name"type="text" label="Your Name" variant="standard" style={{width: '60%'} }/> <br/>
                           <TextField onChange={handleOnchange} id="standard-basic" name="email"  type="email" label="Your Email" variant="standard" style={{width: '60%'} }/> <br/> 
                       <TextField onChange={handleOnchange} id="standard-basic" name="password"  type="password" label="Password" variant="standard" style={{width: '60%'} }/> <br/>
                       <TextField onChange={handleOnchange} id="standard-basic" name="password2"  type="password" label="Confirm Password" variant="standard" style={{width: '60%'} }/> <br/> <br />
                      <button type="submit" className="btn">Register</button>
                            </form>
                            
                           
                        }
                        {isLoading && <CircularProgress />}
                        {authError ? <Alert severity="error">{ authError }</Alert> : " "}
                        {user?.email ? <Alert severity="success">Success</Alert> : " "}
                      <br />
                       <NavLink to="/login">Already Registered? Please Login</NavLink>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} sx={{my:5}}>
                       <img src={logimg} alt="" width="100%"/>

                   </Grid>
               </Grid>
              
           </Container>
        </div>
    );
};

export default Register;