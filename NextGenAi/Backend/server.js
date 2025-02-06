const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv"); // Import dotenv explicitly
const fs = require("fs"); // For checking .env file existence

const app = express();

app.use(cors());
app.use(express.json());

// Load environment variables, handling potential missing file
if (fs.existsSync(".env")) {
    dotenv.config();
} else {
    console.error(".env file not found.  Using fallback or exiting.");
    // Either use a default URI for development or exit:
    // process.exit(1);  // Uncomment to force exit if no .env
    // Or provide a fallback:
    // const MONGODB_URI = "mongodb://localhost:27017/your_db_name"; // Example
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("MONGODB_URI is missing. Check your .env file.");
    process.exit(1);
}

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB Connected to Atlas"))
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
        process.exit(1); // Keep exiting on connection failure
    });

const searchSchema = new mongoose.Schema({
    query: String,
    response: String,
    createdAt: { type: Date, default: Date.now },
});

// Add index for sorting (important for performance)
searchSchema.index({ createdAt: -1 }); // Index on createdAt descending

const Search = mongoose.model( "final", searchSchema);

app.post( "/api/finals", async (req, res) => {
    try {
        const { query, response } = req.body;

        if (!query || !response) {
            return res.status(400).json({ error: "Missing query or response" });
        }

        const newSearch = new Search({ query, response });
        const savedSearch = await newSearch.save();

        res.status(201).json({ message: "Data saved successfully", data: savedSearch });

    } catch (err) {
        console.error("Error saving to MongoDB:", err);
        res.status(500).json({ error: "Internal Server Error" }); // More generic message
    }
});


app.get( "/api/finals", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const searches = await Search.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
        const totalCount = await Search.countDocuments();

        res.json({
            data: searches,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
        });
    } catch (err) {
        console.error("Error retrieving searches:", err); // Log the error
        res.status(500).json({ error: "Internal Server Error" }); // Generic message
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));