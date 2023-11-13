const Recipe = require('../models/Recipe' )
const asyncHandler = require('../middleware/async')
const ErrorResponse =require('../utils/errorResponse')


//desc Get all recipes
//route GET /api/v1/recipes
//access public
exports.getRecipes = asyncHandler(async (req, res, next) =>{

        
        var recipe = await Recipe.find();

        if(!recipe){
             return next(
            new ErrorResponse(`recipes not found`, 404)
            );
        }

        return res.status(200).json(
            {
                success : true,
                count: recipe.length ,
                data: recipe
            }
        );


        
});

//desc Get single recipe
//route Get /api/v1/recipe/:id
//access public
exports.getRecipe = asyncHandler(async (req, res, next) =>{
        
        var recipe =  await Recipe.findById(req.params.id);

        if(!recipe){
            return next(
                new ErrorResponse(`recipe not found with id of ${req.params.id}`, 404)
            );
        }

        return res.status(200).json(
            {
                success : true,
                count: recipe.length ,
                data: recipe
            }
        );
    
});

//desc Create recipes
//route POST /api/v1/recipe/
//access public
exports.createRecipe = asyncHandler(async (req, res, next) =>{
        console.log(req.body)
        var recipe = await Recipe.create(req.body);
    
        res.status(200).json(
            {
                success : true,
                data: recipe,
                error: null
            }
        );
    
    
});


//desc Update recipes
//route PUT /api/v1/recipe/:id
//access public
exports.updateRecipe = async (req, res, next) =>{
    var recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new :true, runValidators:true});

    if(!recipe){
        return next(new ErrorResponse(`recipe not found with id ${req.params.id}`,404))
    }

    res.status(200).json(
        {
            success : true,
            count: recipe.length,
            data:recipe
        }
    );
};

//desc Delete recipes
//route DELETE /api/v1/recipe/:id
//access public
exports.deleteRecipe = asyncHandler(async (req, res, next) =>{

    var recipe = await Recipe.findByIdAndDelete(req.params.id);

    if(!recipe){
        return new ErrorResponse(`Cannot find resource with id ${req.params.id}`,404)
    }

    res.status(200).json(
        {
            success : true,
            count: recipe.length,
            data:recipe
        }
    );

});