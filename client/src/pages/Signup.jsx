import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../service/api";

const Signup=()=>{

    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const navigate= useNavigate();

    const executeLogin= async()=>{
       const userData={
        username: username,
        password: password
       }

       try{
        await addUser(userData);
        console.log(`Signup successful`);
        navigate(`/home`);
       }
       catch{
        console.log('Error during signup', error);
       }
    }
return(
     
    <>
    <Box paddingLeft={"600px"}>
        <Typography>Username: </Typography>
        <TextField onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        <Typography>Password: </Typography>
        <TextField onChange={(e)=>{
            setPassword(e.target.value);
        }} type="password"/>
        <p></p>
        <Button variant="contained" onClick={executeLogin}>Signup</Button>
    </Box>
    </>
)
}

export default Signup;