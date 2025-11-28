const express = require("express");
const productrouter = express.Router();
const product = require("../models/Product");
const { protect } = require("../middleware/auth");
const advancedFilters = require("../middleware/advancedFilters");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

productrouter
  .route("/")
  .get(advancedFilters(product, "users"), getProducts)
  .post(protect, createProduct);
// router.route('/').get(getRecipes) = explicitly included with /:id route
productrouter
  .route("/:id")
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

module.exports = productrouter;
