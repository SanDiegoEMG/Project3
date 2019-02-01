const mongoose = require("mongoose");
const Schema = mongoose.Schema;



    const speciesSchema = new Schema({
        name_latin: { 
            type: String, 
        },
        name_common: { 
            type: String, 
        },
        gestation: {
            type: Number,
        }
    });
    
    const Species = mongoose.model("Species", speciesSchema);
  
  module.exports = Species;

  