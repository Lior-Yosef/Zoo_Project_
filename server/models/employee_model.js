const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Employee = new schema({
        name: { type: String, required: true },
        role: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },{ timestamps: true }
);
module.exports = mongoose.model("Employee", Employee);