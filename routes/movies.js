import express from "express";

const router = express.Router()
//CRUD Functionality of movies

// r -for  reading movies
router.get('/', (req , res) => {
    res.send("get all movies lists");
});

// c -for  creating movies
router.post('/', (req , res) => {
    res.send("create movie");
});

// u-for  updating movie
router.put('/:id', (req , res) => {
    res.send("update movie");
});

// d-for  deleting movie
router.put('/:id', (req , res) => {
    res.send("deleted movie");
});

export default router;