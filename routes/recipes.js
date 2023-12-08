const express = require("express");
const reciperouter = express.Router();
const recipe = require("../models/Recipe");
const advancedFilters = require("../middleware/advancedFilters");
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipes");

reciperouter
  .route("/")
  .get(advancedFilters(recipe, "users"), getRecipes)
  .post(createRecipe);
// router.route('/').get(getRecipes) = explicitly included with /:id route
reciperouter
  .route("/:id")
  .get(getRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe);

module.exports = reciperouter;