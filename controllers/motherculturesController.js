const db = require("../models");

// Defining methods for the motherculturesController
module.exports = {
  motherculturesFindAll: function(req, res) {
    db.Mothercultures.find(req.query)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  createMothercultures: function(req, res) {
    db.Mothercultures.create(req.body)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  updateMothercultures: function(req, res) {
    db.Mothercultures.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  removeMotherculture: function (req, res) {
    db.Motherculture
    .findById({_id: req.params.id})
    .then(datafoo=>datafoo.remove())
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(422).json(err));
  }
};
