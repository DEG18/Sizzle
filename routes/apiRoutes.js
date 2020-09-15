const Router = require("express").Router();
const collectionController = require("../controllers/collectionController");
const userController = require("../controllers/userController");


// routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.json("Welcome to Sizzle");
});

Router.route("/users").post(userController.createNew);

Router.route("/collection").post(collectionController.createNew).get(collectionController.findAll);
Router.route("/:id").delete(collectionController.remove);

module.exports = Router;
