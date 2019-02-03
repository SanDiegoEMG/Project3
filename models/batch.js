const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchSchema = new Schema({
    batchNum: { 
        type: Number, 
    },
    bagNum: {
        type: Number
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