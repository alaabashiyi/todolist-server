const mongoose = require('mongoose');
require("dotenv").config();

const MONGO = process.env.MONGODB_URL

const connectDB = async () => {
    mongoose
        .connect(MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected to DB Successfully'))
        .catch((err) => console.error({ err }, 'Not Connected'));
}

module.exports = connectDB;