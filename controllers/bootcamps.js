//desc Get all bootcamps
//route GET /api/v1/bootcamps
//access public
exports.getBootcamps = (req, res, next) =>{
    res.status(200).json(
        {
            success : true,
            data: jsonData
        }
    );
};

//desc Get single bootcamp
//route Get /api/v1/bootcamp/:id
//access public
exports.getBootcamp = (req, res, next) =>{
    res.status(200).json(
        {
            success : true,
            msg:`Get bootcamp ${req.params.id}`
        }
    );
};

//desc Create bootcamps
//route POST /api/v1/bootcamp/
//access public
exports.createBootcamp = (req, res, next) =>{
    res.status(200).json(
        {
            success : true,
            msg:`Created bootcamp`
        }
    );
};


//desc Update bootcamps
//route PUT /api/v1/bootcamp/:id
//access public
exports.updateBootcamp = (req, res, next) =>{
    res.status(200).json(
        {
            success : true,
            msg:`Update bootcamp ${req.params.id}`
        }
    );
};

//desc Delete bootcamps
//route DELETE /api/v1/bootcamp/:id
//access public
exports.deleteBootcamp = (req, res, next) =>{

    res.status(200).json(
        {
            success : true,
            msg:`Delete bootcamp ${req.params.id}`
        }
    );

};