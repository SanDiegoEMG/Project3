const db = require("../models");

// Defining methods for the adminController
module.exports = {
  adminFindAll: function(req, res) {
    db.Admin.find(req.query)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  createAdmin: function(req, res) {
    db.Admin.create(req.body)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  updateAdmin: function(req, res) {
    db.Admin.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(datafoo => res.json(datafoo))
      .catch(err => res.status(422).json(err));
  },

  removeAdmin: function (req, res) {
    db.Admin
    .findById({_id: req.params.id})
    .then(datafoo=>datafoo.remove())
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(422).json(err));
  }
};
