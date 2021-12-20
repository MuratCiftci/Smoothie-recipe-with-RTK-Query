const User = require("../models/User");

exports.user = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.user });
    // eslint-disable-next-line no-unused-vars
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
};
