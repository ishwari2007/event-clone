import { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../services/eventService";

function EventList() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    await deleteEvent(id);
    fetchEvents();
  };

  return (
    <div>
      <h2>Events</h2>

      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.location}</p>

          <button onClick={() => handleDelete(event._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EventList;