const { register, login } = require("../controllers/auth");
const { user } = require("../controllers/users");
const {
  createRecipe,
  updateRecipe,
  loadRecipe,
  loadAllRecipes,
  loadByUser,
} = require("../controllers/recipes");
const router = require("express").Router();
const { authValidate } = require("../utils/authValidation");
const verify = require("../middlewares/verifyToken");
//Authentication
router.post("/register", authValidate("register"), register);
router.post("/login", login);

//User
router.get("/user/:user", user);

//Recipes
router.get("/recipes", loadAllRecipes);
router.post("/recipe", verify,  createRecipe);
router.put("/recipe/:id", verify, updateRecipe);
router.get("/recipe/:id", loadRecipe);
router.get("/recipes/:user", loadByUser);

module.exports = router;
