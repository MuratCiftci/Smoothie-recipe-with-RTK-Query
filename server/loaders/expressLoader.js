const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const routes = require("../routes/routes");


module.exports = (app) => {
  // define any middlewares that need to run befoure our routes
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("common"));

  //Uploading Images
  app.use("/images", express.static(path.join(__dirname, "../images")));
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        req.fileValidationError = "Forbidden extension";
        return cb(null, false, req.fileValidationError);
      }
    },
  });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    if (req.fileValidationError) {
      return res.status(400).json("No file received or invalid file type");
    }
    return res.status(200).json("File has been uploaded");
  });

  //Routes
  app.use("/api",routes);

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
