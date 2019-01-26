const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// STARTER CODE NOT FULLY DEVELOPED ... coordinates w/arrayofmushroomdata.js in the scripts folder
// Goal is to update that one array-of-objects and have it reflected properly throughout the app!
    const mushTypeSchema = new Schema({
        name_latin: { 
            type: String, 
        },
        name_common: { 
            type: String, 
        },
        
        img: { 
            data: Buffer, 
            type: String 
        },
    });
    
    const Mushrooms = mongoose.model("Mushrooms", mushTypeSchema);
  
  module.exports = Mushrooms;

  // END STARTER CODE
  