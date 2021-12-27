const { body } = require("express-validator");


exports.recipeValidate = () => {
  const errors = [
    body("title")
      .exists()
      .trim()
      .withMessage("Title is required")

      .notEmpty()
      .withMessage("Title cannot be blank")

      .isLength({ max: 72 })
      .withMessage("Title must be at most 72 characters long")

      .custom((value) => value.trim() === value)
      .withMessage("Title cannot start or end with whitespace"),


    body("desc")
      .exists()
      .withMessage("Description is required")

      .isLength({ min: 1 })
      .withMessage("Description cannot be blank")

      .isLength({ min: 8 })
      .withMessage("Description must be at least 8 characters long")

      .isLength({ max: 800 })
      .withMessage("Description must be at most 800 characters long"),
     body("ingredients")
      .exists()
      .withMessage("Ingredients is required")
      .isArray({max:15})
      .withMessage("I don't think blender can handle that much stuff. "),

  ];


  return errors;
};
