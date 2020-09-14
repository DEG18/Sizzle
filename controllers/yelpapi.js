const axios = require("axios");
const db = require("../models");
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.API_KEY);

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = function (app) {
    app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/main.html"));
    let restaurants;
    client
      .search({
        term: "vegan",
        location: "new york, ny",
      })
      .then((response) => {
        restaurants = response.jsonBody.businesses.map((business) => {
          const obj = {
            key: business.id,
            name: business.name,
            url: business.url,
            rating: business.rating,
            address: business.location.display_address,
            phone: business.display_phone,
            image: business.image_url,
            };
            console.log(obj);
          return obj;
        });
        var hbsObject = {
          restaurant: restaurants,
        };
        res.render("home", hbsObject);
      })
      .catch((e) => {
        console.log(e);
      });
    // res.render("main", restaurant);
  });


};
