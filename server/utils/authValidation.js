const { body } = require("express-validator");
const User = require("../models/User");

exports.authValidate = (method) => {
  const errors = [
    body("username")
      .exists()
      .trim()
      .withMessage("Username is required")

      .notEmpty()
      .withMessage("Username cannot be blank")

      .isLength({ max: 32 })
      .withMessage("Username must be at most 32 characters long")

      .custom((value) => value.trim() === value)
      .withMessage("Username cannot start or end with whitespace")

      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage("Username contains invalid characters"),

    body("password")
      .exists()
      .withMessage("Password is required")

      .isLength({ min: 1 })
      .withMessage("Password cannot be blank")

      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")

      .isLength({ max: 72 })
      .withMessage("Password must be at most 72 characters long"),
    body("email")
      .exists()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Must be an email"),
  ];

  if (method === "register") {
    errors.push(
      body("username").custom(async (username) => {
        const exists = await User.countDocuments({ username });
        if (exists) throw new Error("Username already exists");
      }),
      body("email").custom(async (email) => {
        const exists = await User.countDocuments({ email });
        if (exists) throw new Error("Email already exists");
      })
    );
  }
 

  return errors;
};
