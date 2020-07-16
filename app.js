if(process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express"),
app = express(),
mongoose = require("mongoose");

const Note = require("./models/note");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}))

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true});

app.get("/", async (req, res) => {
    var notes = await Note.find({})
    res.render("index", {notes: notes});
});

app.get("/addnote", (req, res) => {
    res.render("addnote");
});

app.post("/addnote", async (req, res) => {
    await Note.create(req.body.newnote);
    res.redirect("/");
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));