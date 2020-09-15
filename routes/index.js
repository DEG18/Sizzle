const Router = require("express").Router();
const passport = require("../authentication/passport");
const apiRoutes = require("./apiRoutes");
const authRoutes = require("../authentication/authRoutes");
const yelpRoutes = require("./yelpRooutes")

// API Routes
Router.use("/api", passport.authenticate('jwt', {session: false}), apiRoutes);
Router.use("/auth", authRoutes);
Router.use("/yelp", yelpRoutes)


module.exports = Router;