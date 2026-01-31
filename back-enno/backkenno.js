// // back-enno/backkenno.js

// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors'; // ✅ Add CORS for frontend requests

// export const app = express();
// const PORT = 5000;

// app.use(cors());
// // const app = express();
// app.use(express.json());

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/enno-data', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Schema & Model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   subject: String,
//   message: String
// });
// // const User = mongoose.model('User', userSchema);
// const User = mongoose.model('User', userSchema, 'ennoUserData');

// // Routes
// // ✅ POST - create/save a user
// app.post('/create', async (req, res) => {
//     try {
//       const user = new User(req.body);
//       await user.save();
//       res.json({ message: 'User created', user });
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to create user' });
//     }
//   });
  
//   // ✅ GET - fetch all users
//   app.get('/create', async (req, res) => {
//     try {
//       const ennoUserData = await User.find();
//       res.json(ennoUserData);
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to fetch users' });
//     }
//   });
  
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });



import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"],
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection (Atlas)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const User = mongoose.model("User", userSchema, "ennoUserData");

// Routes
app.post("/create", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.get("/create", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// IMPORTANT: dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
