const Task = require('../models/taskModel');

const getTodolist = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({ success: true, tasks })
    } catch (er) {
        console.log(er);
    }
};

module.exports = getTodolist;