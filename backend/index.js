/* uses Express to create a simple web server that will
 be ran on a specified port */

// import external modules and read environment variables
const express = require("express"),
       app = express(),
       port = process.env.PORT || 3001,
       cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs").promises;

// sets up express application and returns message to console
  // once app runs
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.listen(port, () => console.log("Backend server live on " + port));

// returns a message once a GET request is made to the
// specified route
app.get("/", (req, res) => {
    res.send({ message: "Connected to Backend server!" });
});

// makes a call to addItem func once a POST reuqest is made
  // to the specified route
app.post("/add/item", addItem)

// takes in a request body from Todo List App which reps
  // a todo item
// body is then converted into new son obj called newTask to rep
  // the new todo item
// new json obj is appended to a json list located in a file 
  // called database.json to rep the todos list

async function addItem (request, response) {
    try {
        // Converting Javascript object (Task Item) to a JSON string
        const id = request.body.jsonObject.id
        const task = request.body.jsonObject.task
        const curDate = request.body.jsonObject.currentDate
        const dueDate = request.body.jsonObject.dueDate
        const newTask = {
          ID: id,
          Task: task,
          Current_date: curDate,
          Due_date: dueDate
        }

        const data = await fs.readFile("database.json");
        const json = JSON.parse(data);
        json.push(newTask);
        await fs.writeFile("database.json", JSON.stringify(json))
        console.log('Successfully wrote to file') 
        response.sendStatus(200)
    } catch (err) {
        console.log("error: ", err)
        response.sendStatus(500)
    }
}