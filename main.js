import express from "express";
import movieRoutes from "./routes/movies.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;


// data understaning middleware
app.use(express.json());
// connect db
connectDB();

app.get('/', (req, res) => {
  res.json({msg: "Hello world!!"});
});

//CRUD Functionality of movies
app.use('/movies', movieRoutes)

app.listen(PORT,() => {
    console.log(`the server is running at http://localhost:${PORT}`);
})