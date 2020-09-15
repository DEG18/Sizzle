// const axios = require("axios");
const db = require("../models");
require ("dotenv").config()
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.API_KEY);

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function (req, res) {
    client.search({
      term: req.query.term,
      location: req.query.location
      // term: "sweet",
      // location:"new york"
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
          // const x = business.name;
          console.log(obj);
          return obj;
          // return x;
        });
        res.json(restaurants)
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
