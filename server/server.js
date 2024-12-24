import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./config/mongodb.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB");

    // Routes
    app.use("/api/user", userRouter);

    app.get("/", (req, res) => {
      res.send("Hello from Node.js API");
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

startServer();
