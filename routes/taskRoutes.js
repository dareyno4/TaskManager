const express = require('express'); //Import express for routing
const Task = require('../models/Task'); //Import the Task model for database operations

const router = express.Router() //create new Router Instance

//1. get all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find(); //find all tasks in the database
        res.json(tasks); //send the tasks as a JSON response ??
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message}); //send error message if something goes wrong
    }
});

//2. create new task
router.post("/", async (req, res) => {
    try {
        const {title, description, status} = req.body; //destructure the request body to get task details
        const newTask = new Task({title, description, status}); //create a new task instance
        await newTask.save(); //save the new task to the database
        res.status(201).json(newTask); //send the created task as a response
    } catch (err) {
        res.status(400).json({message: "Error creating task", error: err.message}); //send error message if something goes wrong
    }
});

//3. update tasks
router.put("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdandUpdate(req.params.id, req.body, {new: true}); //find task by ID and update it
        res.json(updatedTask); //send the updated task as a response
    }
    catch (err) {
        res.status(400).json({message: "Error updating task"}, err.message); //send error message if something goes wrong
    }
});

//4. delete tasks
router.delete("/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id); //find task by ID and delete it
        res.json({message: "Task deleted successfully"}); //send success message
    } catch (err) {
        res.status(500).json({message: "Error deleting tasks", error: err.message}); //send error message if something goes wrong
    }
});
module.exports = router; //export the router for use in other files