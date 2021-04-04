"use-strict";
//Importing neccesary objects
import Express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

//Requring Routes
import postgraphileRouter from "./middlewares/postgraphile";

//Initializing Environment Variables
dotenv.config();

//Configuring port number
const port = process.env.PORT || "3001";

//Creating Express Instance
const app = Express();

//Configuring middleware
app.use(cors());
app.use(logger("dev"));
app.use(Express.json({ limit: "1024mb" }));
app.use(
  Express.urlencoded({
    limit: "1024mb",
    extended: true,
  })
);

app.use(cookieParser());

//Index route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Server is up & running on " + port });
});

//static images route
app.use("/image", Express.static(path.join(__dirname, "uploads")));

//Routes
app.use("/api", require("./routes"));

//Postgrahile middleware setup
app.use(postgraphileRouter);

app.listen(port, (e) => {
  if (e) {
    console.log("Unable to start server");
    console.log(e);
    return;
  }
  console.log("Server up on : " + port);
});
