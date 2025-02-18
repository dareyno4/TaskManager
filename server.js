require("dotenv").config(); // Load environment variables from .env file (keeps sensitive data out of code)
const express = require("express"); //framework for handling API requests
const cors = require("cors"); //enables cross-origin requests  (frontend and back end can communicate)

const app = express(); //create an instance of express

app.use(express.json()); //parse incoming JSON requests
app.use(cors()); //enable CORS for all routes (allows frontend to access backend)

app.get("/", (req, res) => {
    res.send("Task Manager API is running..."); // send a simple message when the root URL is accessed
});

const PORT = process.env.PORT || 5001; //set the port to the value in the .env file or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); //log a message when the server starts
});

const connectDB = require("./config/db"); //import the database connection function
connectDB(); //connect to the database