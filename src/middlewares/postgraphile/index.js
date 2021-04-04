import express from "express";

//Postgraphile imports
import { postgraphile } from "postgraphile";
import { giveMeConnectionString } from "./../../util";

const PostGraphileNestedMutations = require("postgraphile-plugin-nested-mutations");

const postgraphileRouter = express.Router();
const connStr = giveMeConnectionString();

postgraphileRouter.use(
  postgraphile(connStr, {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    subscriptions: true,
    appendPlugins: [PostGraphileNestedMutations],
  })
);

export default postgraphileRouter;
