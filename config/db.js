const mongoose = require('mongoose'); // Import mongoose for MongoDB object modeling

const connectDB = async() => { // Function to connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGO_URI, { // Connect to MongoDB using the URI from environment variables
            useNewUrlParser: true, // Use the new URL parser
            useUnifiedTopology: true, // Use the new unified topology engine
        });
        console.log('MongoDB connected...');
        }
    catch (err) {
        console.error("MangoDB connection error:", err.message); // Log any connection errors
        process.exit(1); // Exit the process with failure
    }
};
module.exports = connectDB; // Export the connectDB function for use in other files