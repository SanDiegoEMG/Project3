const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const motherculturesSchema = new Schema({
  name: {
    type: String
  },
  source: {
    type: String
      // website
  },
  number: {
    type: Number
  }
});

const Mothercultures = mongoose.model("Mothercultures", motherculturesSchema);

module.exports = Mothercultures;
