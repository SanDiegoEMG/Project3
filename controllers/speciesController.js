const db = require("../models");

// Defining methods for the speciesController
module.exports = {
  speciesFindAll: function(req, res) {
    db.Species.find(req.query)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  createSpecies: function(req, res) {
    db.Species.create(req.body)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  updateSpecies: function(req, res) {
    db.Species.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  removeSpecies: function (req, res) {
    db.Species
    .findById({_id: req.params.id})
    .then(datafoo=>datafoo.remove())
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(422).json(err));
  }
};
