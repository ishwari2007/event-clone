import { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../services/eventService";

const EventList = ({ onEdit }) => {

  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const data = await getEvents();
    setEvents(data);
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

      <h2 className="text-xl font-bold mb-4">
        Event List
      </h2>

      <div className="space-y-4">

        {events.map((event) => (

          <div
            key={event._id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >

            <h3 className="text-lg font-semibold">
              {event.title}
            </h3>

            <p className="text-gray-600">
              {event.description}
            </p>

            <p className="text-gray-500">
📍 {event.location}
</p>

            <p className="text-sm text-gray-500">
              {event.date}
            </p>

            <div className="mt-3 space-x-2">

              <button
                onClick={() => onEdit(event)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(event._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default EventList;