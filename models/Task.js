const mongoose = require('mongoose'); // Import mongoose for MongoDB object modeling; this is a library that makes it easier to interact with MongoDB

// Define a schema for the Task model
const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true}, //Task Title(required)
    description: {type: String}, //optional description
    status: {
        type: String, 
        enum: ["todo", "in-progress", "done"], //status can only be one of these values
        default: "todo" //default status is "todo"
    }, //Task status (predefined values)
    createdAt: {type: Date, default: Date.now} //auto-set time-stamp
});

//create and import task model
module.exports = mongoose.model('Task', TaskSchema); //export the Task model based on the schema