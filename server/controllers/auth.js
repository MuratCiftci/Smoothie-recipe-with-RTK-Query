const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { AccessTokenSecret  } = require("../config");



exports.register = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong username or password");
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(401).json("Wrong username or password");
    }
   
    const access_token = generateAccessToken(user);
  
    // eslint-disable-next-line no-unused-vars
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, access_token});
  } catch (err) {
    res.status(500).json(err);
  }
};

const generateAccessToken = (user) => {
  // const time = 1000 * 60 * 60;
  // const s = time.toString();
  return jwt.sign({username: user.username}, AccessTokenSecret);
}
