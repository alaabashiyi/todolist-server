const express = require('express');
const app = express();
const bodyParser = require('body-parser')


const PORT = 4000;

let todolist = [
    {
        content: 'Buy milk',
        id: 'x7',
        checked: false,
    },
    {
        content: 'Get Ice creamm',
        id: 'x5',
        checked: true,
    }, {
        content: 'Get Poweaaaaa',
        id: 'x778',
        checked: true,
    }
];

app.use(bodyParser.json());

app.get('/todolist', (req, res, next) => {
    res.json({ todolist });
});

app.post('/posttodo', (req, res, next) => {
    const { todo } = req.body;
    if (todo) {
        todolist.push(todo);
    }

    res.json({ todolist });
});

app.post('/deletetodo', (req, res, next) => {
    const { id } = req.body;
    console.log('id of todo', id)
    if (id) {
        todolist = todolist.filter(todo => todo.id !== id);
    }

    res.status(201).json({ todolist, success: true });

})


app.listen(PORT, () => {
    console.log(`Server is on ${PORT}`);
});