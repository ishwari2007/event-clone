import { useParams, useNavigate } from "react-router-dom";

const EventDetails = () => {

  const { type } = useParams();
  const navigate = useNavigate();

  const images = {
    music: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    wedding: "https://images.unsplash.com/photo-1519741497674-611481863552",
    tech: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
  };

  const gallery = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
  ];

  return (

    <div className="max-w-5xl mx-auto py-16 px-6">

      {/* Event Title */}

      <h1 className="text-4xl font-bold mb-6 text-center">
        {type.toUpperCase()} Event
      </h1>


      {/* Event Cover Image */}

      <img
        src={images[type]}
        className="rounded-xl mb-8 w-full h-[400px] object-cover"
      />


      {/* Event Description */}

      <p className="text-gray-600 mb-10 text-center">
        Experience an unforgettable {type} event with premium services,
        professional management and amazing atmosphere.
      </p>


      {/* Packages */}

      <h2 className="text-2xl font-bold mb-6">
        Event Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="border p-6 rounded-xl hover:shadow-lg transition">
          <h3 className="font-bold text-lg">Basic Package</h3>
          <p className="mt-2">Stage + Lighting</p>
          <p className="font-bold mt-4 text-indigo-600">$499</p>
        </div>

        <div className="border p-6 rounded-xl hover:shadow-lg transition">
          <h3 className="font-bold text-lg">Standard Package</h3>
          <p className="mt-2">Stage + Lighting + DJ</p>
          <p className="font-bold mt-4 text-indigo-600">$899</p>
        </div>

        <div className="border p-6 rounded-xl hover:shadow-lg transition">
          <h3 className="font-bold text-lg">Premium Package</h3>
          <p className="mt-2">Full Event Management</p>
          <p className="font-bold mt-4 text-indigo-600">$1499</p>
        </div>

      </div>
      {/* SPECIAL OFFER */}

<div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl mb-12 flex flex-col md:flex-row items-center justify-between">

  <div>
    <h3 className="text-2xl font-bold">
      🎉 Limited Time Offer
    </h3>

    <p className="mt-2">
      Get <span className="font-bold">20% OFF</span> on the Premium Package this month.
    </p>
  </div>

  <button
    className="mt-4 md:mt-0 bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
    onClick={() => navigate("/dashboard")}
  >
    Claim Offer
  </button>

</div>


      {/* Photo Gallery */}

      <h2 className="text-2xl font-bold mb-6">
        Event Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">

        {gallery.map((img, index) => (

          <img
            key={index}
            src={img}
            className="rounded-xl h-48 w-full object-cover hover:scale-105 transition duration-300"
          />

        ))}

      </div>


      {/* Book Event Button */}

      <div className="text-center">

        <button
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
          onClick={() => navigate("/dashboard")}
        >
          Book Event
        </button>

      </div>

    </div>

  );
};

export default EventDetails;