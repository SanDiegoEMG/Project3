const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchSchema = new Schema({
    batchNum: { 
        type: Date, 
        default: Date.now 
    },
    species: {
        type: String,
    },
    bagSize: {
        type: Number,
    }
});

const Batch = mongoose.model("Batch", batchSchema);
  
module.exports = Batch;