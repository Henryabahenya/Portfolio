const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUrl = process.env.MONGODB_URI;

  if (!mongoUrl) {
    console.error(
      "CRITICAL ERROR: MONGODB_URI environment variable is not defined!",
    );
    process.exit(1);
  }

  mongoose
    .connect(mongoUrl)
    .then(() => console.log("Connected to MongoDB Atlas successfully"))
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
};

module.exports = connectDB;
