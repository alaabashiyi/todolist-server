const Task = require('../models/taskModel');

const addTask = async (req, res, next) => {
    const { todo } = req.body;

    try {

        console.log({ todo });

        const task = await Task.create({ content: todo?.content });

        if (task) {
            return res.json({ message: "Task added", success: true, task });
        }

    } catch (er) {
        console.log(er);
        return res.json({ message: "Task was not added", success: false });
    }

};

module.exports = addTask