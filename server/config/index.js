const dotenv = require("dotenv")

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const envFound = dotenv.config();
if (envFound.error) {

  throw new Error(" Couldn't find .env file  ");
}

module.exports = {
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.MONGODB_URL,

  AccessTokenSecret: process.env.JWT_ACCESS_SECRET,
  RefreshTokenSecret : process.env.JWT_REFRESH_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,
  jwtExpiry : process.env.JWT_EXP,

};
