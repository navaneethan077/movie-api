import express from "express";

const app = express();
const PORT = 6969;


app.get('/', (req, res) => {
  res.json({msg: "Holl world!"});
});

app.listen(PORT,() => {
    console.log(`the server is running at http://localhost:${PORT}`);
})