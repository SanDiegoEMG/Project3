const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchSchema = new Schema({
    bagId: { 
        type: Number,
        // on front end, create date in yearmody format and add a sequential number for each bag
    },
    species: {
        type: String,
        // controlled at form to be a dropdown of options coming from species collection
    },
    bagSize: {
        type: Number,
        // controlled at form to be a dropdown of options
    },
    phase: {
        type: String,
        // list of options .... changing this triggers different functions to calculate 'projected harvest'
    },
    source: {
        type: String,
        // purchase source of the spawn in the bags .. would be nice to have a drop down of previously entered items
    },
    parent: {
        type: String,
        // strain source of spawn in the bags
    },
    notes: {
        type: String,
        // space for farmer to write any notes ... can be used to make model more proscriptive in the future
    }

});

const Batch = mongoose.model("Batch", batchSchema);
  
module.exports = Batch;