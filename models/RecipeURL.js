const mongoose = require("mongoose");
const slugify = require("slugify");

const RecipeURLSchema = new mongoose.Schema({
  recipe_id: {
    type: String,
    unique: true,
  },
  original_url: String,
  original_title: String,
  bookmark_count: Number,
  thumbnail_picture: String,
  hasVideo: {
    type: Boolean,
    default: false,
  },
  uploaded: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("recipeURL", RecipeURLSchema);
