import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection=async(username, password)=>
{
    const URL = `mongodb+srv://${username}:${password}@cluster0.ifgnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;