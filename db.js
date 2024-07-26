const mongoose = require("mongoose");

const connectWithDb = () => {
mongoose.connect(
    "mongodb+srv://soundarraj1271:JbGuZvYk0WR13kiR@soundhar.gakg0r8.mongodb.net/E-KART",
)
.then(() => console.log('DB Connected'))
}

module.exports = {connectWithDb};