// dendencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("./authentication/passport");

// setup the port and the express app
const PORT = process.env.PORT || 4000;
const app = express();

// middlewares for accepting post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// routes
app.use(routes);

// setup the mongodb database
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://deg-18:Mongodbalex@1z@cluster0.42abh.mongodb.net/sizzle?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
