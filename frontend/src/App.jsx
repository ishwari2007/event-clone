// import { useState } from "react";
// import EventForm from "./components/EventForm";
// import EventList from "./components/EventList";

// function App() {

//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [refresh, setRefresh] = useState(false);

//   const refreshEvents = () => {
//     setRefresh(!refresh);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">

//       {/* Navbar */}
//       <div className="bg-indigo-600 text-white p-4 shadow-md">
//         <h1 className="text-2xl font-bold text-center">
//           Event Manager
//         </h1>
//       </div>

//       <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">

//         <EventForm
//           selectedEvent={selectedEvent}
//           refresh={refreshEvents}
//         />

//         <EventList
//           key={refresh}
//           onEdit={(event) => setSelectedEvent(event)}
//         />

//       </div>

//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";

import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/event/:type" element={<EventDetails />} />
      </Routes>
<Footer />
    </Router>
  );
}

export default App;