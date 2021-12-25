const Recipe = require("../models/Recipe");
const { validationResult } = require("express-validator");

exports.createRecipe = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  const newRecipe = new Recipe(req.body);
  try {
    const recipe = await newRecipe.save();
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe.username === req.body.username) {
      try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedRecipe);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your Recipe!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loadRecipe = async (req, res) => {
  try {
    const post = await Recipe.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loadAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.loadByUser = async (req, res) => {
  const username = req.params.user;
  try {
    let recipes;
    if (username) {
      recipes = await Recipe.find({ username });
    }
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
};
