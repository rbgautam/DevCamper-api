const ProductDetail = require("../models/ProductDetail");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

//desc Get all products
//route GET /api/v1/products
//access public
exports.getProductDetails = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedFilters);
});

//desc Get single Product
//route Get /api/v1/Product/:id
//access public
exports.getProductDetail = asyncHandler(async (req, res, next) => {
  var product = await ProductDetail.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Product Detail not found with id of ${req.params.id}`, 404)
    );
  }

  return res.status(200).json({
    success: true,
    count: product.length,
    data: product,
  });
});

//desc Create videos
//route POST /api/v1/ProductDetail/
//access public
exports.createProductDetail = asyncHandler(async (req, res, next) => {
  console.log('Prod desc: ',req.body)
  var product = await ProductDetail.create(req.body);
  //await ProductDetail.insertmany(req.body, {ordered : false });
  // 
  
  // 
  
    res.status(200).json({
    success: true,
    data: product,
    error: null,
  });
});

//desc Update video
//route PUT /api/v1/product/:id
//access public
exports.updateProductDetail = async (req, res, next) => {
  var product = await ProductDetail.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(
      new ErrorResponse(`Product Details not found with id ${req.params.id}`, 404)
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
exports.deleteProductDetail = asyncHandler(async (req, res, next) => {
  var product = await ProductDetail.findByIdAndDelete(req.params.id);

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
