require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connecting to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 30000,  // Optional: Increase connection timeout to 30 seconds
    });

    console.log("MongoDB connection successful!");

    // Perform a simple check to test the connection
    const db = mongoose.connection;
    db.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });

    db.once("open", () => {
      console.log("MongoDB database connected successfully!");
    });

  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
};

module.exports = {
  connectDB,
};
