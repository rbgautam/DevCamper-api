const express = require("express");
const recipeURLrouter = express.Router();
const recipeURL = require("../models/RecipeURL");
const { protect } = require("../middleware/auth");
const advancedFilters = require("../middleware/advancedFilters");
const {
  getrecipeurls,
  getrecipeurl,
  createrecipeurl,
  updaterecipeurl,
  deleterecipeurl,
} = require("../controllers/recipeURLs");

recipeURLrouter
  .route("/")
  .get(advancedFilters(recipeURL, "users"), getrecipeurls)
  .post(protect, createrecipeurl);
// router.route('/').get(getRecipes) = explicitly included with /:id route
recipeURLrouter
  .route("/:id")
  .get(getrecipeurl)
  .put(protect, updaterecipeurl)
  .delete(protect, deleterecipeurl);

module.exports = recipeURLrouter;
