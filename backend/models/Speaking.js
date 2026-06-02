const mongoose = require("mongoose");

const speakingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a talk title"],
      trim: true,
    },
    role: {
      type: String,
    },
    organization: {
      type: String,
    },
    event: {
      type: String,
      required: [true, "Please add the event name"],
    },
    topicSummary: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "Please add the event date"],
    },
    description: {
      type: String,
    },
    slidesUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Speaking", speakingSchema);
