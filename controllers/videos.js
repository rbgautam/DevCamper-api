const Video = require("../models/Video");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

//desc Get all videos
//route GET /api/v1/videos
//access public
exports.getVideos = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedFilters);
});

//desc Get single Video
//route Get /api/v1/Video/:id
//access public
exports.getVideo = asyncHandler(async (req, res, next) => {
  var video = await Video.findById(req.params.id);

  if (!video) {
    return next(
      new ErrorResponse(`Video not found with id of ${req.params.id}`, 404)
    );
  }

  return res.status(200).json({
    success: true,
    count: recipe.length,
    data: recipe,
  });
});

//desc Create videos
//route POST /api/v1/video/
//access public
exports.createVideo = asyncHandler(async (req, res, next) => {
  // console.log(req.body)
  var video = await Video.create(req.body);

  res.status(200).json({
    success: true,
    data: video,
    error: null,
  });
});

//desc Update video
//route PUT /api/v1/video/:id
//access public
exports.updateVideo = async (req, res, next) => {
  var video = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!video) {
    return next(
      new ErrorResponse(`Video not found with id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    count: video.length,
    data: video,
  });
};

//desc Delete video
//route DELETE /api/v1/video/:id
//access public
exports.deleteVideo = asyncHandler(async (req, res, next) => {
  var video = await Video.findByIdAndDelete(req.params.id);

  if (!video) {
    return new ErrorResponse(
      `Cannot find resource with id ${req.params.id}`,
      404
    );
  }

  res.status(200).json({
    success: true,
    count: video.length,
    data: video,
  });
});
