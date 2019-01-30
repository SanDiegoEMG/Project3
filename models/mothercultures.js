const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const motherculturesSchema = new Schema({
  label_name_formal: {
    type: String,
    required: true,
  },
  label_name_common: {
    type: String,
    required: true,
  },
  other_label_details: {
    type: String,
  },
  company_manufacturer: {
    type: String,
    required: true,
  },
  company_purchased: {
    type: String,
    required: true,
  },
  form: {
    type: String,
    required: true,
    // spores, liquid culture, grain spawn, sawdust spawn, other
  }

});

const Mothercultures = mongoose.model("Mothercultures", motherculturesSchema);

module.exports = Mothercultures;
