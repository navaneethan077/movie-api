 export const MovieIndex = (req , res) => {
    res.send("get all movies lists");
};

export const MovieCreate = (req , res) => {
    console.log(req.body);

    return res.json(req.body);
};

export const MovieUpdate = (req , res) => {
    res.send("update movies");
};

export const MovieDelete = (req , res) => {
    res.send("deleted movies");
};