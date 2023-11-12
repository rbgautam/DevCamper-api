const Bootcamp = require('../models/Bootcamp')
const asyncHandler = require('../middleware/async')
const ErrorResponse =require('../utils/errorResponse')


//desc Get all bootcamps
//route GET /api/v1/bootcamps
//access public
exports.getBootcamps = asyncHandler(async (req, res, next) =>{

        
        var bootcamp = await Bootcamp.find();

        if(!bootcamp){
             return next(
            new ErrorResponse(`Bootcamps not found`, 404)
            );
        }

        return res.status(200).json(
            {
                success : true,
                count: bootcamp.length ,
                data: bootcamp
            }
        );


        
});

//desc Get single bootcamp
//route Get /api/v1/bootcamp/:id
//access public
exports.getBootcamp = asyncHandler(async (req, res, next) =>{
        
        var bootcamp =  await Bootcamp.findById(req.params.id);

        if(!bootcamp){
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            );
        }

        return res.status(200).json(
            {
                success : true,
                count: bootcamp.length ,
                data: bootcamp
            }
        );
    
});

//desc Create bootcamps
//route POST /api/v1/bootcamp/
//access public
exports.createBootcamp = asyncHandler(async (req, res, next) =>{
    
        var bootcamp = await Bootcamp.create(req.body);
    
        res.status(200).json(
            {
                success : true,
                data: bootcamp,
                error: null
            }
        );
    
    
});


//desc Update bootcamps
//route PUT /api/v1/bootcamp/:id
//access public
exports.updateBootcamp = async (req, res, next) =>{
    var bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {new :true, runValidators:true});

    if(!bootcamp){
        return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`,404))
    }

    res.status(200).json(
        {
            success : true,
            count: bootcamp.length,
            data:bootcamp
        }
    );
};

//desc Delete bootcamps
//route DELETE /api/v1/bootcamp/:id
//access public
exports.deleteBootcamp = asyncHandler(async (req, res, next) =>{

    var bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!bootcamp){
        return new ErrorResponse(`Cannot find resource with id ${req.params.id}`,404)
    }

    res.status(200).json(
        {
            success : true,
            count: bootcamp.length,
            data:bootcamp
        }
    );

});