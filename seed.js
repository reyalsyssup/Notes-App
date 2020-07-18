const mongoose = require("mongoose"),
Note = require("./models/note");

var data = [
    {title: "Seed note", body: "seed note body :eyes:"},
    {title: "Seed note", body: "seed note body :eyes:"},
    {title: "Seed note", body: "seed note body :eyes:"},
    {title: "Seed note", body: "seed note body :eyes:"},
    {title: "Seed note", body: "seed note body :eyes:"},
    {title: "Seed note", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
];

async function seed() {
    await Note.deleteMany({});
    for(const item of data) {
        await Note.create(item);
    }
}

module.exports = seed;