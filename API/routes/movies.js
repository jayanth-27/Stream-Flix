const router= require("express").Router();
const Movies= require("../models/Movies");
const verify=require("../verifyToken");

//CREATE new movie
router.post("/", verify, async (req, res)=>{
    if(req.userInfo.isAdmin)
    {
        //adding movie which is present in body
        const newMovie = new Movies(req.body);
        try{
            //saving that movie
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("You are not allowed")
    }
});

//UPDATE movie
router.put("/:id", verify, async (req, res)=>{
    if(req.userInfo.isAdmin)
    {
        try{
            const updatedMovie = await Movies.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
            res.status(200).json(updatedMovie);
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("You are not allowed to update")
    }
});

//DELETE movie
router.delete("/:id", verify, async (req, res)=>{
    if(req.userInfo.isAdmin)
    {
        
        try{
            const deleteddMovie = await Movies.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie is deleted");
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("You are not allowed to update")
    }
});

//GET one movie
router.get("/find/:id", verify, async (req, res)=>{
    
    try{
        const movie = await Movies.findById(req.params.id);
        res.status(200).json(movie);
    }catch(err){
        res.status(404).json(err);
    }
});

//GET random movie (for the landing home page)
router.get("/random", verify, async (req, res)=>{
    //for the type of landing i.e movie or series
    const type= req.query.type;
    let movie;
    try{
        if(type==="series")
        {
            movie = await Movies.aggregate([
                {
                    $match : {isSeries: true}
                },
                {
                    //for selecting random one among the series
                    $sample: {size: 1}
                }
            ]);
        }else{
            movie = await Movies.aggregate([
                {
                    $match : {isSeries: false}
                },
                {
                    //for selecting random one among the movies
                    $sample: {size: 1}
                }
            ]);
        }
        res.status(200).json(movie);
    }catch(err){
        res.status(404).json(err);
    }
});

//GET all movies
router.get("/find/all/added",verify, async (req, res)=>{
    const query= req.query.new;
    if(req.userInfo.isAdmin)
    {
        try{
            //if there is a 'new' in the query then return latest 10 movies else all users
            const movies= query ? await Movies.find().sort({_id:-1}).limit(10) : await Movies.find().sort({_id:-1});
            res.status(201).json(movies);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You are not allowed");
    }
});

module.exports = router;