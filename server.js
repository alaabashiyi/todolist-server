const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const dbConnect = require('./utils/dbConnect');
const getTodolist = require('./controllers/getTodolist');
const deleteTask = require('./controllers/deleteTask');
const editTask = require('./controllers/editTask');
const addTask = require('./controllers/addTask');
require("dotenv").config();


const PORT = 4000;

app.use(cors())

app.use(bodyParser.json());

app.get('/todolist', getTodolist);

app.post('/posttodo', addTask);

app.patch('/deletetodo', deleteTask);

app.patch('/edittodo', editTask)


app.listen(PORT, () => {
    console.log(`Server is on ${PORT}`);
    dbConnect();
});