const errorRoute = (req,res,next)=>{
    return res.status(400).json({message:'Route not found'});
}

module.exports = errorRoute;