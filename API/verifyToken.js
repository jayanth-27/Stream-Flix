const jwt = require("jsonwebtoken");

function verify(req,res,next)
{
    const authHeader= req.headers.token;
    //if the token is present and correct
    if(authHeader)
    {
        //seperate the 'Bearer' and the actual token which atre seperated by space
        const token= authHeader.split(" ")[1];
        //verify if the token is valid
        jwt.verify(token, process.env.SECRET_KEY,(err,userInfo)=>{
            if(err){
                res.status(403).json("Invalid Token");
            }
            req.userInfo=userInfo;
            next();
        });
        
    }else{
        res.status(401).json("You are not authenticated");
    }
}

module.exports=verify;