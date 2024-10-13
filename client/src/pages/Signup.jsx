import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { addUser } from "../service/api";
import { UserContext } from "./UserContext";

const Signup = () => {
    const { username, setUsername } = useContext(UserContext);  // Access username and setUsername from context
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const executeLogin = async () => {
        const userData = {
            username,
            password
        };

        try {
            const response = await addUser(userData);  // Capture the response
            if (response && response.data) {  // Check if the response and response.data exist
                
                navigate('/home');  // Redirect to home on success
            } else {
                console.error('No response data');
            }
        } catch (error) {
            console.error('Error during signup:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <Box paddingLeft={"600px"} pt={20}>
                <Typography>Username: </Typography>
                <TextField 
                      style={{backgroundColor:"white", outlineColor:"white"}}
                    onChange={(e) => setUsername(e.target.value)}  // Update username from input
                />
                <Typography>Password: </Typography>
                <TextField 
                    style={{backgroundColor:"white", outlineColor:"white"}}
                    onChange={(e) => setPassword(e.target.value)}  // Update password from input
                    type="password"
                />
                <p></p>
                <Button variant="contained" onClick={executeLogin}>Signup</Button>
            </Box>
        </>
    );
};

export default Signup;
