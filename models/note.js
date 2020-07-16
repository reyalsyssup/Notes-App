const mongoose = require("mongoose");

noteSchema = mongoose.Schema({
    title: String,
    body: String,
    edited: Boolean,
    created: {type: Date, default: new Date()}
});

module.exports = mongoose.model("note", noteSchema);