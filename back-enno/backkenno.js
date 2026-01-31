import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors()); // ✅ FIX
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/create", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created", user });
  } catch {
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.get("/create", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
