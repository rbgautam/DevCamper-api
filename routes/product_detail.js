const express = require("express");
const productdetailrouter = express.Router();
const productdetail = require("../models/ProductDetail");
const { protect } = require("../middleware/auth");
const advancedFilters = require("../middleware/advancedFilters");
const {
  getProductDetails,
  getProductDetail,
  createProductDetail,
  updateProductDetail,
  deleteProductDetail,
} = require("../controllers/productDetail");

productdetailrouter
  .route("/")
  .get(advancedFilters(productdetail, "users"), getProductDetails)
  .post(createProductDetail);
  // .post(protect, createProductDetail);
// router.route('/').get(getRecipes) = explicitly included with /:id route
productdetailrouter
  .route("/:id")
  .get(getProductDetail)
  .put(protect, updateProductDetail)
  .delete(protect, deleteProductDetail);

module.exports = productdetailrouter;
