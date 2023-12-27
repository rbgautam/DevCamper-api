const mongoose = require("mongoose");
const slugify = require("slugify");
const ingredientSchema = new mongoose.Schema({
  quantity: String,
  name: String,
});

const recipeStepSchema = new mongoose.Schema({
  step_text: String,
  step_pict_list: [{ type: String }],
  original_step_text: String,
});

const RecipeSchema = new mongoose.Schema({
  recipe_id: {
    type: String,
    unique: true,
  },
  title: String,
  header: String,
  main_picture: String,
  recipe_cooking_time: String,
  recipe_servings: String,
  recipe_favorite_count: String,
  recipe_short_description: String,
  recipe_hashtag: String,
  ingredient_name_string: String,
  ingredients_list: [{ type: ingredientSchema }],
  receipe_steps: [{ type: recipeStepSchema }],
  author_link: String,
  author_avatar: String,
  author_disp_name: String,
  author_handle: String,
  author_location: String,
  author_bio_short: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
