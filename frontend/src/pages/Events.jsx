// import { useEffect, useState } from "react";
// import { getEvents } from "../services/eventService";

// const Events = () => {

//   const [events, setEvents] = useState([]);
// const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     const data = await getEvents();
//     setEvents(data);
//   };
// const categories = ["Music", "Tech", "Sports"];
//   return (
    
//     <div className="max-w-6xl mx-auto p-6">

//       <h2 className="text-2xl font-bold mb-6">
//         Upcoming Events
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6">

//         {events
//   .filter((event) =>
//     event.title.toLowerCase().includes(search.toLowerCase())
//   )
//   .map((event) => (

//           <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">

//   <div className="h-40 bg-indigo-500"><img
//   src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
//   alt="event"
//   className="h-40 w-full object-cover"
// /></div>

//   <div className="p-4">
// <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded">
//   {categories[Math.floor(Math.random()*categories.length)]}
// </span>
//     <h3 className="text-xl font-bold">
//       {event.title}
//     </h3>

//     <p className="text-gray-600 mt-2">
//       {event.description}
//     </p>

//     <p className="text-sm text-gray-500 mt-2">
//       📍 {event.location}
//     </p>

//     <p className="text-sm text-gray-500">
//       📅 {new Date(event.date).toLocaleDateString()}
//     </p>

//     <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded">
//       Book Event
//     </button>

//     <input
//   type="text"
//   placeholder="Search events..."
//   className="border p-2 rounded mb-6 w-full"
//   onChange={(e) => setSearch(e.target.value)}
// />

//   </div>

// </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default Events;
import { Link } from "react-router-dom";

const Events = () => {

  const categories = [
    {
      title: "Music Concert",
      desc: "Enjoy live music performances.",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      type: "music",
    },
    {
      title: "Wedding Ceremony",
      desc: "Beautiful wedding celebrations.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      type: "wedding",
    },
    {
      title: "Tech Conference",
      desc: "Professional networking events.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      type: "tech",
    },
  ];

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Upcoming Events
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {categories.map((cat, index) => (
<Link to={`/event/${cat.type}`} key={index}>

  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-300">

    <img
      src={cat.image}
      alt="event"
      className="h-48 w-full object-cover"
    />

    <div className="p-5">

      <h3 className="text-xl font-bold">
        {cat.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {cat.desc}
      </p>

      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
        View Details
      </button>

    </div>

  </div>

</Link>

        ))}

      </div>

    </div>
  );
};

export default Events;