import { CircularProgress, Grid, TextField, Typography } from '@mui/material';

import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import logimg from '../../../images/banner2.jpg'


const Login = () => {

    const [loginData, setLoginData] = useState({});

    const { user, loginUser, isLoading, authError } = useAuth();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }


    return (
        <div >
            <Container >
               
               <Grid container spacing={2} sx={{placeItems: "center"}}>
                   <Grid item xs={12} sm={12} md={6} >
                       <Typography variant="h4">LogIn</Typography>
                       {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField onChange={handleOnchange} id="standard-basic" name="email" type="text" label="Your Email" variant="standard" style={{ width: '60%' }} /> <br />
                            

                            <TextField onChange={handleOnchange} id="standard-basic" name="password" type="password" label="Password" variant="standard" style={{ width: '60%' }} /> <br /> <br />


                            <button  type="submit"  className="btn">Login</button>
                           
                        </form>} <br />
                        {isLoading && <CircularProgress />}
                        {authError ? <Alert severity="error">{ authError }</Alert> : " "}
                        {user?.email ? <Alert severity="success">Success</Alert> : " "}
                       <NavLink to="/register">New User? Please Register</NavLink>
                      

                   </Grid>
                   <Grid item xs={12} sm={12} md={6} sx={{py:5, mt:5 }}>
                       <img src={logimg} alt="" width="100%"/>

                   </Grid>
               </Grid>
              
           </Container>
        </div>
    );
};

export default Login;