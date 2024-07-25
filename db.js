const mongoose = require("mongoose");
const connectWithDb = () => {
    mongoose.connect("mongodb+srv://soundarraj1271:JbGuZvYk0WR13kiR@soundhar.gakg0r8.mongodb.net/E-KART");

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Database connected");
    });
};

module.exports = {connectWithDb};