const mongoose = require("mongoose");
const Schema = mongoose.Schema;



    const speciesSchema = new Schema({
        name_latin: { 
            type: String, 
            unique: true
        },
        name_common: { 
            type: String, 
            unique: true
        },
        name_call: {
            type: String,
            unique: true
        },
        gestation: {
            type: String, 
        },
        imageUrl: {
            type: String,
            default: "https://via.placeholder.com/150"
        },
        description: {
            type: String,
            required: true
        }
    });
    
    const Species = mongoose.model("Species", speciesSchema);
  
  module.exports = Species;

  // END STARTER CODE
  