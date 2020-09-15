const db = require("../models");

module.exports = {
  createNew: async (req, res) => {
    const { name, url, key, rating, address, phone,image } = req.body
    
    const newCollection = await db.Collection.create({
        key:key,
        name: name,
        address: address,
        url: url,
        rating: rating,
        image: image,
        phone:phone
    })

    res.json(newCollection);
    },
    findAll: async (req, res) => {
        const newCollection = await db.Collection.find();
    res.json(newCollection);
    }
}