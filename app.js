if(process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express"),
app = express(),
mongoose = require("mongoose"),
methodOverride = require("method-override");

const Note = require("./models/note");
const seed = require("./seed");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true});

// seeds db in debug
// seed();

app.get("/", async (req, res) => {
    var notes = await Note.find({})
    res.render("index", {notes: notes});
});

app.get("/addnote", (req, res) => {
    res.render("addnote");
});

app.get("/viewnote/:noteid", async (req, res) => {
    var note = await Note.findById(req.params.noteid);
    var realNoteContent = await Note.findById(req.params.noteid);
    res.render("viewnotes", {note: note, realNoteContent: realNoteContent});
});

app.post("/addnote", async (req, res) => {
    await Note.create(req.body.newnote);
    res.redirect("/");
});

app.post("/updatenote/:id", async (req, res) => {
    await Note.findByIdAndUpdate(req.params.id, req.body.updatenote);
    res.redirect("/");
});

app.delete("/del/:id", async (req, res) => {
    await Note.findByIdAndRemove(req.params.id);
    res.redirect("/");
});

app.get("/*", (req, res) => {
    res.send("You're not in the right place. <a href='/'>Come back!</a>")
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));