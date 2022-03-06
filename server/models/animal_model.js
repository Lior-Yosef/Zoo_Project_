const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Animal = new schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    cageNumber: { type: Number, required: true },
    gender: { type: String, required: true },
    type: { type: String, require: true },
},{ timestamps: true }
);

module.exports = mongoose.model("Animal", Animal);