const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    location: {
      type: String,
    },

    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);