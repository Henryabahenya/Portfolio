const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

// Load env vars BEFORE importing config that reads process.env
dotenv.config();

const connectDB = require("./config/db");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(helmet());

// CORS configuration (uses process.env.FRONTEND_URL)
app.use(cors(corsOptions));

app.use(express.json());

// Serve static front-end files in production
app.use(express.static(path.join(__dirname, "dist")));

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/speaking", require("./routes/speakingRoutes"));

// SPA catch-all: serve index.html for any non-API route
app.get("{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Global error handler (must be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
