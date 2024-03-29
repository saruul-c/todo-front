// code-n tushid ashiglah hamaarliig shaardana
const express = require("express");
const bodyParser = require("body-parser");

// initialize Express.js server and save as a variable
// so it can be referred to as `app`
const app = express();

app.use(bodyParser.json());
let todos = [];//in-memory storage for todos

//GET endpoint to fetch all todo items
app.get("/todos", (req, res)) => {
    res.json(todos);
}

//POST endpoint to create a new todo item
//provide 'title' and optionally 'completed' in the requist body as JSON
app.post("/todos", (req, res) => {
    const todo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: req.body.completed || false,
    };
    todos.push(todo);
    res.status(201).json(todo);
});

// Put endpoint to update an existing todo item with the specified 'id'
app.put("/todos/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const todo = todo.find((t) => t.id === id);
    if(!todo){
        return res.status(404).json({error:"Todo not found"});
    }
    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed || todo.completed;
    req.json(todo);
});

//DELETE endpoint to remove an exissting todo item with the specific 'id'
app.delete("/todos/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const index = todos.findIndex((t) => t.id ===id);
    if(index === -1){
        return res.status(404).json({error: "Todo not found"});
    }
    todos.splice(index, 1);
    res.status(204).send();
})
//run the server on port 3000
const PORT = process.env.PORT || 3000;
//https://quickstarts.postman.com/guide/express/index.html?index=..%2F..index#2