const databaseLoader = require("./dbLoader");
const expressLoader = require("./expressLoader");
const Logger = require("./logger");
module.exports = async (app) => {
  await databaseLoader();
  Logger.info("DB loaded and connected!");
  expressLoader(app);
  Logger.info("Express loaded");
};
