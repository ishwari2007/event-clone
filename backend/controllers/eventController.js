const Event = require("../models/Event");


// CREATE EVENT
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL EVENTS
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET SINGLE EVENT
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE EVENT
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE EVENT
exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};