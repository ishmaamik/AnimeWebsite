import express from 'express';
import dotenv from 'dotenv';
import Connection from './db/database.js';
import route from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config();
const username= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;
const app= express();
const PORT=3000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(PORT, ()=> console.log(`Server running successfully on PORT ${PORT}`));
app.use('/', route);

app.get(`/`, (req, res)=>{
    res.send(`Hi Anime!`)
})

Connection(username, password);



