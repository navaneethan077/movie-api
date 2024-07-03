import express from "express";
import { 
    MovieIndex,
    MovieCreate,
    MovieDetail,
    MovieUpdate,
    MovieDelete } from "../controllers/movie.controller.js";

const router = express.Router()
//CRUD Functionality of movies

// r -for  reading movies
router.get('/', MovieIndex);

router.get('/:id',MovieDetail);

// c -for  creating movies
router.post('/', MovieCreate);

// u-for  updating movie
router.put('/:id', MovieUpdate);

// d-for  deleting movie
router.delete("/:id", MovieDelete);

export default router;