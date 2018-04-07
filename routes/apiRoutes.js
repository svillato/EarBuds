
const mongoose = require('mongoose');
const Item = mongoose.model('Item');

module.exports = app => {
    app.post("/api/post", function (req, res) {
        Item.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })

    app.get("/api/items", function (req, res) {
        Item
          .find({})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })
}
