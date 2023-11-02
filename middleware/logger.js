const logger = (req,res,next)=>{
    console.log(`${req.method} Request received from  ${req.protocol}://${req.hostname}/${req.url}`);
    next();
};

module.exports =logger;