const db = require("../models");

// SAMPLE CODE FOR WHAT WILL BE IN THIS FOLDER (from booksController 09-Stu-AJAXBooks)
        module.exports = {
        findAll: function(req, res) {
            db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        findById: function(req, res) {
            db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        create: function(req, res) {
            db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        update: function(req, res) {
            db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
        remove: function(req, res) {
            db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
        };
// END SAMPLE CODE