const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a project title"],
      trim: true,
    },
    pillar: {
      type: String,
    },
    organization: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    impactMetrics: {
      type: [String],
    },
    technologies: {
      type: [String],
      required: true,
    },
    githubUrl: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Project", projectSchema);
