const express = require("express");
const router = express.Router();
const Speaking = require("../models/Speaking");
const { protect } = require("../middleware/auth");

// @route   GET /api/speaking
// @desc    Get all speaking engagements
router.get("/", async (req, res) => {
  try {
    const talks = await Speaking.find().sort({ date: -1 });
    res.json(talks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET /api/speaking/:id
// @desc    Get single speaking engagement
router.get("/:id", async (req, res) => {
  try {
    const talk = await Speaking.findById(req.params.id);
    if (!talk) {
      return res.status(404).json({ message: "Talk not found" });
    }
    res.json(talk);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   POST /api/speaking
// @desc    Create a speaking engagement
router.post("/", async (req, res) => {
  try {
    const talk = await Speaking.create(req.body);
    res.status(201).json(talk);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   PUT /api/speaking/:id
// @desc    Update a speaking engagement
router.put("/:id", async (req, res) => {
  try {
    const talk = await Speaking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!talk) {
      return res.status(404).json({ message: "Talk not found" });
    }
    res.json(talk);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   DELETE /api/speaking/:id
// @desc    Delete a speaking engagement
router.delete("/:id", async (req, res) => {
  try {
    const talk = await Speaking.findByIdAndDelete(req.params.id);
    if (!talk) {
      return res.status(404).json({ message: "Talk not found" });
    }
    res.json({ message: "Talk removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
