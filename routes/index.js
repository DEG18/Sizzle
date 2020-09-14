const Router = require("express").Router();
const passport = require("../authentication/passport");
const apiRoutes = require("./apiRoutes");
const authRoutes = require("../authentication/authRoutes");

// API Routes
Router.use("/api", passport.authenticate('jwt', {session: false}), apiRoutes);
Router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = Router;