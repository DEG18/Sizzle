// dendencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const passport = require("./authentication/passport");

// setup the port and the express app
const PORT = process.env.PORT || 4000;
const app = express();


// setup the mongodb database
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://deg-18:Mongodbalex@1z@cluster0.42abh.mongodb.net/sizzle?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// middlewares for accepting post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", routes);

// start the server
app.listen(PORT, () => {
  console.log(`You're being served on port ${PORT}!!!`)
})