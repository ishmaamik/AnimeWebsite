import express from 'express';
import { addUser } from '../controller/user-controller.js';
import { getAnimes } from '../controller/anime-controller.js';
const route= express.Router();

route.post('/add', addUser);
route.get('/animes', getAnimes);
export default route;