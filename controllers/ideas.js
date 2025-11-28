const Idea = require("../models/Idea");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

//desc Get all ideas
//route GET /api/v1/ideas
//access public
exports.getIdeas = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedFilters);
});

//desc Get single Idea
//route Get /api/v1/Idea/:id
//access public
exports.getIdea = asyncHandler(async (req, res, next) => {
  var idea = await Idea.findById(req.params.id);

  if (!idea) {
    return next(
      new ErrorResponse(`Idea not found with id of ${req.params.id}`, 404)
    );
  }

  return res.status(200).json({
    success: true,
    count: recipe.length,
    data: recipe,
  });
});

//desc Create ideas
//route POST /api/v1/idea/
//access public
exports.createIdea = asyncHandler(async (req, res, next) => {
  // console.log(req.body)
  var idea = await Idea.create(req.body);

  res.status(200).json({
    success: true,
    data: idea,
    error: null,
  });
});

//desc Update idea
//route PUT /api/v1/idea/:id
//access public
exports.updateIdea = async (req, res, next) => {
  var idea = await Idea.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!idea) {
    return next(
      new ErrorResponse(`Idea not found with id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    count: idea.length,
    data: idea,
  });
};

//desc Delete idea
//route DELETE /api/v1/idea/:id
//access public
exports.deleteIdea = asyncHandler(async (req, res, next) => {
  var idea = await Idea.findByIdAndDelete(req.params.id);

  if (!idea) {
    return new ErrorResponse(
      `Cannot find resource with id ${req.params.id}`,
      404
    );
  }

  res.status(200).json({
    success: true,
    count: idea.length,
    data: idea,
  });
});
