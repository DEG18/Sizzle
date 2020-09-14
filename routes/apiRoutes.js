const Router = require("express").Router();
const userController = require("../controllers/userController");

// routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.json("Welcome to Sizzle");
});

Router.route("/users").post(userController.createNew);

module.exports = Router;
