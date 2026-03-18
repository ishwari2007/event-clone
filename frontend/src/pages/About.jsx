const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">

        <h1 className="text-5xl font-bold mb-4">
          About Event Manager
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          We help people discover, organize, and manage events effortlessly.
          From concerts to conferences, our platform makes event management
          simple and powerful.
        </p>

      </section>


      {/* ABOUT DESCRIPTION */}

      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 mb-4">
            Event Manager is designed to simplify event planning and booking.
            Whether you're hosting a wedding, music concert, or tech conference,
            our platform helps you organize everything efficiently.
          </p>

          <p className="text-gray-600">
            Built with modern technologies like the MERN stack, our platform
            ensures fast performance, seamless user experience, and powerful
            event management tools.
          </p>

        </div>

      </section>


      {/* FEATURES */}

      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">
                Easy Event Creation
              </h3>
              <p className="text-gray-600">
                Quickly create and manage events with our intuitive dashboard.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">
                Discover Events
              </h3>
              <p className="text-gray-600">
                Explore different types of events happening around you.
              </p>
            </div>

            <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">
                Professional Tools
              </h3>
              <p className="text-gray-600">
                Built with the MERN stack for performance and scalability.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* STATS SECTION */}

      <section className="py-16 bg-gray-100">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-8">

          <div>
            <h2 className="text-4xl font-bold text-indigo-600">
              50+
            </h2>
            <p className="text-gray-600">
              Events Hosted
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-indigo-600">
              10K+
            </h2>
            <p className="text-gray-600">
              Participants
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-indigo-600">
              100+
            </h2>
            <p className="text-gray-600">
              Communities
            </p>
          </div>

        </div>

      </section>


      {/* TEAM SECTION */}

      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white shadow rounded-xl p-6">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">
              Alex Johnson
            </h3>
            <p className="text-gray-500">
              Founder
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">
              Sarah Lee
            </h3>
            <p className="text-gray-500">
              Event Manager
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <img
              src="https://randomuser.me/api/portraits/men/55.jpg"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">
              David Kim
            </h3>
            <p className="text-gray-500">
              Technical Lead
            </p>
          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="bg-indigo-600 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Start Exploring Events Today
        </h2>

        <p className="mb-6">
          Discover amazing events or create your own in minutes.
        </p>

        <a
          href="/events"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold"
        >
          Explore Events
        </a>

      </section>

    </div>
  );
};

export default About;