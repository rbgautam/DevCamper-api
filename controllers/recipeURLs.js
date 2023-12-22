const recipeURL = require("../models/RecipeURL");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

//desc Get all RecipeURLs
//route GET /api/v1/RecipeURLs
//access public
exports.getrecipeurls = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedFilters);
});

//desc Get single RecipeURL
//route Get /api/v1/RecipeURL/:id
//access public
exports.getrecipeurl = asyncHandler(async (req, res, next) => {
  var RecipeURL = await recipeURL.findById(req.params.id);

  if (!RecipeURL) {
    return next(
      new ErrorResponse(`RecipeURL not found with id of ${req.params.id}`, 404)
    );
  }

  return res.status(200).json({
    success: true,
    count: RecipeURL.length,
    data: RecipeURL,
  });
});

//desc Create RecipeURLs
//route POST /api/v1/RecipeURL/
//access public
exports.createrecipeurl = asyncHandler(async (req, res, next) => {
  // console.log(req.body);
  var RecipeURL = await recipeURL.create(req.body);

  res.status(200).json({
    success: true,
    data: RecipeURL,
    error: null,
  });
});

//desc Update RecipeURL
//route PUT /api/v1/RecipeURL/:id
//access public
exports.updaterecipeurl = async (req, res, next) => {
  var RecipeURL = await recipeURL.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!RecipeURL) {
    return next(
      new ErrorResponse(`RecipeURL not found with id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    count: RecipeURL.length,
    data: RecipeURL,
  });
};

//desc Delete RecipeURL
//route DELETE /api/v1/RecipeURL/:id
//access public
exports.deleterecipeurl = asyncHandler(async (req, res, next) => {
  var RecipeURL = await recipeURL.findByIdAndDelete(req.params.id);

  if (!RecipeURL) {
    return new ErrorResponse(
      `Cannot find resource with id ${req.params.id}`,
      404
    );
  }

  res.status(200).json({
    success: true,
    count: RecipeURL.length,
    data: RecipeURL,
  });
});
