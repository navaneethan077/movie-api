import express from "express";
import movieRoutes from "./routes/movies.js";

const app = express();
const PORT = 6969;


app.get('/', (req, res) => {
  res.json({msg: "Hello world!!"});
});

//CRUD Functionality of movies
app.use('/movies', movieRoutes)

app.listen(PORT,() => {
    console.log(`the server is running at http://localhost:${PORT}`);
})