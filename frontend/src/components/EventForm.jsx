import { useState } from "react";
import { createEvent } from "../services/eventService";

function EventForm({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(form);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />

      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;