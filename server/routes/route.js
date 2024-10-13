import express from 'express';
import { addUser } from '../controller/user-controller.js';
import { getAnimeName, getAnimes } from '../controller/anime-controller.js';
import { getReview, postReview } from '../controller/review-controller.js';
const route= express.Router();

route.post('/add', addUser);
route.get('/animes', getAnimes);
route.post('/reviews', postReview); 
route.get('/reviews/:anime', getReview);
route.get('/animes/:animename', getAnimeName)
export default route;