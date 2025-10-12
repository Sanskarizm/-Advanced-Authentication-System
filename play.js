import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// 1. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// 2. Define Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// 3. Pre-save hook (hash password if modified)
userSchema.pre("save", async function (next) {
  console.log("Modified fields:", this.modifiedPaths());

  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  console.log("Password hashed before save");
  console.log("email hashed before save");
  next();
});

// 4. Create Model
const User = mongoose.model("User", userSchema);

// 5. Create Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON

// 6. Routes

// Register route
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({ email, password });
    await user.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Update email route
app.put("/update-email/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    user.email = email;
    await user.save();

    res.json({ success: true, message: "Email updated", user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Update password route
app.put("/update-password/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    user.password = password; // pre-save hook will hash it
    await user.save();

    res.json({ success: true, message: "Password updated", user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// 7. Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
