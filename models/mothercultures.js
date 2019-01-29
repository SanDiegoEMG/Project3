const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const motherculturesSchema = new Schema({
  label_name_formal: {
    type: String
  },
  source: {
    type: String
  }
});

const Mothercultures = mongoose.model("Mothercultures", motherculturesSchema);

module.exports = Mothercultures;
