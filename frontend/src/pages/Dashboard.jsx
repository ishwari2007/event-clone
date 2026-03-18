import { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const Dashboard = () => {

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const refreshEvents = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">

      <EventForm
        selectedEvent={selectedEvent}
        refresh={refreshEvents}
      />

      <EventList
        key={refresh}
        onEdit={(event) => setSelectedEvent(event)}
      />

    </div>
  );
};

export default Dashboard;