import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// const Home = () => {

//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get("/api/events")
//       .then(res => setEvents(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen">

//       {/* HERO SECTION */}

//       <section
//         className="h-[70vh] flex items-center justify-center text-white text-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
//           backgroundSize: "cover",
//           backgroundPosition: "center"
//         }}
//       >
//         <div className="bg-black/50 p-10 rounded-xl">

//           <h1 className="text-5xl font-bold mb-6">
//             Discover Amazing Events
//           </h1>

//           <p className="mb-6 text-lg">
//             Find concerts, tech meetups, festivals and more
//           </p>

//           <Link
//             to="/events"
//             className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700"
//           >
//             Explore Events
//           </Link>

//         </div>
//       </section>


//       {/* FEATURED EVENTS */}

//       <section className="max-w-6xl mx-auto py-16">

//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Featured Events
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">

//           {events.slice(0,3).map(event => (

//             <div
//               key={event._id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
//             >

//               <img
//                 src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
//                 alt="event"
//                 className="h-40 w-full object-cover"
//               />

//               <div className="p-4">

//                 <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded">
//                   Event
//                 </span>

//                 <h3 className="text-xl font-bold mt-2">
//                   {event.title}
//                 </h3>

//                 <p className="text-gray-600 mt-2">
//                   {event.description}
//                 </p>

//                 <p className="text-sm text-gray-500 mt-2">
//                   📍 {event.location}
//                 </p>

//                 <p className="text-sm text-gray-500">
//                   📅 {new Date(event.date).toLocaleDateString()}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>

//       </section>

//     </div>
//   );
// };

// export default Home;


const Home = () => {

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
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}

      <section
        className="h-[70vh] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="bg-black/50 p-10 rounded-xl">

          <h1 className="text-5xl font-bold mb-6">
            Discover Amazing Events
          </h1>

          <p className="mb-6 text-lg">
            Find concerts, tech meetups, festivals and more
          </p>

          <Link
            to="/events"
            className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Explore Events
          </Link>

        </div>

      </section>


      {/* EVENT CATEGORIES */}

      <section className="max-w-6xl mx-auto py-16">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Events
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

      </section>

    </div>
  );
};

export default Home;