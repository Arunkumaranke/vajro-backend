import express from "express";
import path from "path";
//Router
const Router = express.Router();

//Multer FileUpload Middleware
const upload = require("../middlewares/fileupload").single("file");

Router.post("/imageupload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occurred while adding document.",
      });
      return;
    }
    console.log(req.file);
    res.status(200).send({
      success: true,
      fileURL: process.env.BACKEND_URL + req.file.filename,
    });
  });
});

module.exports = Router;
