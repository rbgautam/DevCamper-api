const Product = require("../models/Product");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

//desc Get all products
//route GET /api/v1/products
//access public
exports.getProducts = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedFilters);
});

//desc Get single Product
//route Get /api/v1/Product/:id
//access public
exports.getProduct = asyncHandler(async (req, res, next) => {
  var product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }

  return res.status(200).json({
    success: true,
    count: product.length,
    data: product,
  });
});

//desc Create videos
//route POST /api/v1/Product/
//access public
exports.createProduct = asyncHandler(async (req, res, next) => {
  // console.log(req.body)
  var product = await Product.insertMany(req.body, {ordered : false });
  
  // await Product.create(req.body);
  
    res.status(200).json({
    success: true,
    data: product,
    error: null,
  });
});

//desc Update video
//route PUT /api/v1/product/:id
//access public
exports.updateProduct = async (req, res, next) => {
  var product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(
      new ErrorResponse(`product not found with id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    count: product.length,
    data: product,
  });
};

//desc Delete video
//route DELETE /api/v1/product/:id
//access public
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  var product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return new ErrorResponse(
      `Cannot find resource with id ${req.params.id}`,
      404
    );
  }

  res.status(200).json({
    success: true,
    count: product.length,
    data: product,
  });
});
