const mongoose = require("mongoose");
const Schema = mongoose.Schema;



    const speciesSchema = new Schema({
        name_latin: { 
            type: String, 
        },
        name_common: { 
            type: String, 
        },
        gestation_time: {
            type:String,
        }
    });
    
    const Species = mongoose.model("Species", speciesSchema);
  
  module.exports = Species;

  // END STARTER CODE
  