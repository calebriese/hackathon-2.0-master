const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipeName => res.json(recipeName))
    .then(foodname => res.json(foodname))
    .then(foodname2 => res.json(foodname2))
    .then(foodname3 => res.json(foodname3))
    .then(foodname4 => res.json(foodname4))
    .then(foodname5 => res.json(foodname5))
    .then(foodname6 => res.json(foodname6))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
  
  const recipeName = req.body.recipeName;
  const ingredient = req.body.ingredient;
  const ingredient2 = req.body.ingredient2;

  const newrecipe = new recipe({recipename,ingredient,ingredient2});


  newrecipe.save()
    .then(() => res.json('Caleb you added a recipe!'))
    .catch(err => res.status(400).json('recipeError: ' + err));
});

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id)
  .then(recipeName => res.json(recipeName))
  .then(foodname => res.json(foodname))
  .then(foodname2 => res.json(foodname2))
  .then(foodname3 => res.json(foodname3))
  .then(foodname4 => res.json(foodname4))
  .then(foodname5 => res.json(foodname5))
  .then(foodname6 => res.json(foodname6))
    .catch(err => res.status(400).json('Error: Caleb' + err));
});

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('recipe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
  .then(recipe => {
    recipe.recipename = req.body.foodname;
    recipe.price = req.body.price;
    recipe.saleprice = req.body.saleprice;

    food.save()
      .then(() => res.json('food updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;