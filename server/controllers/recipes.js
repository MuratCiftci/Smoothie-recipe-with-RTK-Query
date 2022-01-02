const Recipe = require("../models/Recipe");
const { validationResult } = require("express-validator");

exports.createRecipe = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  if (req.user.username === req.body.username) {
    const newRecipe = new Recipe(req.body);
    try {
      const recipe = await newRecipe.save();
      res.status(200).json(recipe);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe.username === req.user.username) {
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
      res.status(401).json("You are not allowed to update this!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (req.user.username === recipe.username) {
      try {
        await recipe.delete();
        res.status(200).json("Recipe has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You are not allowed to delete this!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.loadRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loadAllRecipes = async (req, res) => {
  const searchedTerm = req.query.search;

  try {
    let recipes;
    if (searchedTerm) {
      recipes = await Recipe.find({
        $or: [
          { title: { $regex: searchedTerm, $options: "$i" } },
          { ingredients: { $in: [RegExp(searchedTerm, "i")] } },
        ],
      });
      res.status(200).json(recipes);
    } else {
      recipes = await Recipe.find();
      res.status(200).json(recipes);
    }
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
