const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/Project");
const Speaking = require("./models/Speaking");

// Load env vars
dotenv.config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding...");

    // Clear existing data
    await Project.deleteMany();
    await Speaking.deleteMany();
    console.log("Existing data cleared.");

    // Seed Projects
    await Project.create({
      title: "Child Protection System Frameworks",
      pillar: "Child Protection",
      organization: "UNICEF",
      description:
        "Designed scalable tracking metrics and community reporting systems to enhance field operations.",
      impactMetrics: [
        "Protected over 2,500 children",
        "Streamlined cross-agency reporting",
      ],
      technologies: [],
      featured: true,
    });
    console.log("Project entry seeded.");

    // Seed Speaking
    await Speaking.create({
      title: "Climate Mobility and Youth Advocacy Panel",
      role: "Panelist & Youth Representative",
      organization: "MYCP / YALI",
      event: "Climate Mobility and Youth Advocacy Panel",
      location: "Nairobi, Kenya",
      topicSummary:
        "Addressed policy stakeholders on resource allocation for climate-displaced youth networks.",
      date: new Date("2025-09-15"),
    });
    console.log("Speaking entry seeded.");

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDB();
