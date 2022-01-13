const mongoose = require('mongoose');

const taskModal = new mongoose.Schema({
    content: { type: String, trim: true },
    check: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskModal);