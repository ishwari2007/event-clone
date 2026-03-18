import { useState, useEffect } from "react";
import { createEvent, updateEvent } from "../services/eventService";

const EventForm = ({ selectedEvent, refresh }) => {

  const [event, setEvent] = useState({
    title: "",
    description: "",
    location: "",
    date: ""
  });

  useEffect(() => {
    if (selectedEvent) {
      setEvent(selectedEvent);
    }
  }, [selectedEvent]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (event._id) {
      await updateEvent(event._id, event);
    } else {
      await createEvent(event);
    }

    setEvent({ title: "", description: "",location: "", date: "" });
    refresh();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        {event._id ? "Edit Event" : "Create Event"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
  type="text"
  name="location"
  placeholder="Location"
  value={event.location}
  onChange={handleChange}
  className="w-full border p-2 rounded"
/>


        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Save Event
        </button>

      </form>

    </div>
  );
};

export default EventForm;