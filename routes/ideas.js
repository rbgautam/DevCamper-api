const express = require("express");
const idearouter = express.Router();
const idea = require("../models/Idea");
const { protect } = require("../middleware/auth");
const advancedFilters = require("../middleware/advancedFilters");
const {
  getIdeas,
  getIdea,
  createIdea,
  updateIdea,
  deleteIdea,
} = require("../controllers/ideas");

idearouter
  .route("/")
  .get(advancedFilters(idea, "users"), getIdeas)
  .post(protect, createIdea);
// router.route('/').get(getRecipes) = explicitly included with /:id route
idearouter
  .route("/:id")
  .get(getIdea)
  .put(protect, updateIdea)
  .delete(protect, deleteIdea);

module.exports = idearouter;
