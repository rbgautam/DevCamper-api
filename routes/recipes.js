const express = require('express');
const reciperouter= express.Router();

const {
getRecipes,
getRecipe,
createRecipe,
updateRecipe,
deleteRecipe} = require('../controllers/recipes')

reciperouter.route('/').get(getRecipes).post(createRecipe);
// router.route('/').get(getRecipes) = explicitly included with /:id route
reciperouter.route('/:id').get(getRecipe)
.put(updateRecipe)
.delete(deleteRecipe);


module.exports = reciperouter;