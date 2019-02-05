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
        },
        recipes: [{
            type: String,
            default: "http://www.foxfarmforage.com/foraging/so-you-dont-like-mushrooms-because-the-texture-is-like-a-slug-i-can-help-you-with-that-how-to-properly-cook-mushrooms/"
        }],
        fun_facts: [{
            type: String,
            default: "Mushrooms are more closely related in DNA to humans than to plants. Like human skin, mushrooms can produce vitamin D by being exposed to sunlight. In fact, exposing a freshly cut shiitake mushroom, gills up, to the sun for eight hours can increase its vitamin D content by as much as 4,600 times!"
        }],
        grows_on: {
            type: String,
        }
    });
    
    const Species = mongoose.model("Species", speciesSchema);
  
  module.exports = Species;