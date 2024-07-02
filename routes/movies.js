import express from "express";
import { 
    MovieIndex,
    MovieCreate,
    MovieUpdate,
    MovieDelete } from "../controllers/movie.controller.js";

const router = express.Router()
//CRUD Functionality of movies

// r -for  reading movies
router.get('/', MovieIndex);

// c -for  creating movies
router.post('/', MovieCreate);

// u-for  updating movie
router.put('/:id', MovieUpdate);

// d-for  deleting movie
router.put('/:id', MovieDelete);

export default router;