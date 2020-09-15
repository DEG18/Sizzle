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
    saveCollection: function () {
        return axios.post("/api/collection");
    },
    deleteCollection: function () {
        return axios.delete("/api/collection");
    },
    getCollection: function () {
        return axios.get("/api/collection");
    },
};
