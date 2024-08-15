const router= require("express").Router();
const { findByIdAndDelete } = require("../models/List");
const List= require("../models/List");
const verify=require("../verifyToken");

//CREATE new lists
router.post("/", verify, async (req, res)=>{
    if(req.userInfo.isAdmin)
    {
        //adding list which is present in body
        const newList = new List(req.body);
        try{
            //saving that list
            const savedList = await newList.save();
            res.status(201).json(savedList);
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("You are not allowed")
    }
});

//DELETE lists
router.delete("/:id", verify, async (req, res)=>{
    if(req.userInfo.isAdmin)
    {
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("List is deleted");
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).json("You are not allowed")
    }
});

//GET lists
router.get("/", async (req,res)=>{
    const typeQ= req.query.type;
    const genreQ=req.query.genre;
    let list=[];
    try{
        if(typeQ)
        {
            if(genreQ)
            {
                list = await List.aggregate([
                    {$sample: {size: 10}}, 
                    {$match: {type: typeQ, genre: genreQ}}
                ]);
            }else{
                list = await List.aggregate([
                    {$sample: {size: 10}}, 
                    {$match: {type: typeQ}}
                ]);
            }
        }else{
            list = await List.aggregate([
                {$sample: {size: 10}}
            ]);
        }
        res.status(200).json(list);
    }catch(err)
    {
        res.status(403).json(err);
    }
});

module.exports = router;