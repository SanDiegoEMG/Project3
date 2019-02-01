const db = require("../models");

// Defining methods for the batchController 
module.exports = {
  batchFindAll: function(req, res) {
    db.Batch.find(req.query)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  createBatch: function(req, res) {
    db.Batch.create(req.body)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  updateBatch: function(req, res) {
    db.Batch.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  removeBatch: function (req, res) {
    db.Batch
    .findById({_id: req.params.id})
    .then(datafoo=>datafoo.remove())
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(422).json(err));
  }
};
