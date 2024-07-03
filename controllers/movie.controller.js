import Movie from "../models/movie.model.js";

 export const MovieIndex = (req , res) => {
    res.send("get all movies lists");
};

// export const MovieCreate = async(req , res) => {
//     // id ,title ,dec
//     // console.log(req.body);

//     //validate your data
//     const newMovie = new Movies({
//         title: req.body.title,
//         desc: req.body.desc,
//     });

//     try {
//         const movie = await newMovie.save(); 
//         return res.status(201).json(movie);
           
//     } catch (error) {
//         return res.status(400).json({message: error.massage});
        
//     }

//     // const movie = await newMovie.save(); 

//     // return res.json(req.body);
// };
export const MovieCreate = async (req, res) => {
    // id, title, desc
    // Validate your data.
    const newMovie = new Movie({
      title: req.body.title,
      desc: req.body.desc,
    });
  
    try {
      const movie = await newMovie.save();
      return res.status(201).json(movie);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  

export const MovieUpdate = (req , res) => {
    res.send("update movies");
};

export const MovieDelete = (req , res) => {
    res.send("deleted movies");
};