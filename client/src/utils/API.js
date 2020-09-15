import axios from "axios";

export default {
  // Gets restaurant from the yelp API
    getRest: function (term, location) {
        console.log(term, location)
        return axios.get("/yelp",
            {
                params: {
                    term: term ,
                    location: location
                }
            }
        );
    },
    saveCollection: function (restaurant) {
        return axios.post("/api/collection",restaurant);
    },
    deleteCollection: function (id) {
        return axios.delete("/api/" + id);
    },
    getCollection: function () {
        return axios.get("/api/collection");
    },
};
