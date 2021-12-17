const mongoose = require("mongoose");
const config = require("../config");
const logger = require("./logger");
module.exports = async () => {
  logger.debug("Starting Database connection");
  const connection = await mongoose.connect(config.databaseURL);
  logger.debug("Database connection is good!");
  return connection;
};
